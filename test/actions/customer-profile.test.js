/*
* <license header>
*/

jest.mock('@adobe/aio-sdk', () => ({
  Core: {
    Logger: jest.fn()
  },
  CustomerProfile: {
    init: jest.fn()
  }
}))

const { Core, CustomerProfile } = require('@adobe/aio-sdk')
const mockCustomerProfileInstance = { getProfile: jest.fn() }
const mockLoggerInstance = { info: jest.fn(), debug: jest.fn(), error: jest.fn() }
Core.Logger.mockReturnValue(mockLoggerInstance)
CustomerProfile.init.mockResolvedValue(mockCustomerProfileInstance)

const action = require('./../../actions/customer-profile/index.js')

beforeEach(() => {
  CustomerProfile.init.mockClear() // only clears calls stats
  mockCustomerProfileInstance.getProfile.mockReset() // clears calls + mock implementation

  Core.Logger.mockClear()
  mockLoggerInstance.info.mockReset()
  mockLoggerInstance.debug.mockReset()
  mockLoggerInstance.error.mockReset()
})
const fakeRequestParams = { tenant: 'fakeId', apiKey: 'fakeKey', entityId: 'fakeEntityId', entityIdNS: 'fakeEntityIdNS', __ow_headers: { authorization: 'Bearer fakeToken', 'x-gw-ims-org-id': 'fakeOrgId' } }
describe('customer-profile', () => {
  test('main should be defined', () => {
    expect(action.main).toBeInstanceOf(Function)
  })
  test('should set logger to use LOG_LEVEL param', async () => {
    await action.main({ ...fakeRequestParams, LOG_LEVEL: 'fakeLevel' })
    expect(Core.Logger).toHaveBeenCalledWith(expect.any(String), { level: 'fakeLevel' })
  })
  test('CustomerProfileSDK should be initialized with input credentials', async () => {
    await action.main({ ...fakeRequestParams, otherParam: 'fake4' })
    expect(CustomerProfile.init).toHaveBeenCalledWith('fakeId', 'fakeOrgId', 'fakeKey', 'fakeToken')
  })
  test('should return an http response with CustomerProfile API profile', async () => {
    const fakeResponse = { fakeHash: {} }
    mockCustomerProfileInstance.getProfile.mockResolvedValue(fakeResponse)
    const response = await action.main(fakeRequestParams)
    expect(response).toEqual({
      statusCode: 200,
      body: fakeResponse
    })
  })
  test('if there is an error should return a 500 and log the error', async () => {
    const fakeError = new Error('fake')
    mockCustomerProfileInstance.getProfile.mockRejectedValue(fakeError)
    const response = await action.main(fakeRequestParams)
    expect(response).toEqual({
      error: {
        statusCode: 500,
        body: { error: 'server error' }
      }
    })
    expect(mockLoggerInstance.error).toHaveBeenCalledWith(fakeError)
  })
  test('missing input request parameters, should return 400', async () => {
    const response = await action.main({})
    expect(response).toEqual({
      error: {
        statusCode: 400,
        body: { error: 'missing header(s) \'authorization,x-gw-ims-org-id\' and missing parameter(s) \'tenant,apiKey,entityId,entityIdNS\'' }
      }
    })
  })
})
