import { AgentBaseClient, BASE_URL, routes } from ".";

import axios from 'axios'

jest.mock('axios')

describe('Client', () => {
  let agentbaseClient
  beforeEach(() => {
    agentbaseClient = new AgentBaseClient('test')
  })

  test('should create a client', () => {
    expect(agentbaseClient).toBeDefined();
  })
  // test updateApiKey
  test('should update the api key', () => {
    agentbaseClient.updateApiKey('test2');
    expect(agentbaseClient.apiKey).toBe('test2');
  })
});

describe('Send Requests', () => {
  let agentbaseClient

  beforeEach(() => {
    agentbaseClient = new AgentBaseClient('test')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should make a successful request to the application parameter', async () => {
    const method = 'GET'
    const endpoint = routes.application.url
    const expectedResponse = { data: 'response' }
    axios.mockResolvedValue(expectedResponse)

    await agentbaseClient.sendRequest(method, endpoint)

    expect(axios).toHaveBeenCalledWith({
      method,
      url: `${BASE_URL}${endpoint}`,
      params: null,
      headers: {
        Authorization: `Bearer ${agentbaseClient.apiKey}`,
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    })

  })

  it('should handle errors from the API', async () => {
    const method = 'GET'
    const endpoint = '/test-endpoint'
    const errorMessage = 'Request failed with status code 404'
    axios.mockRejectedValue(new Error(errorMessage))

    await expect(agentbaseClient.sendRequest(method, endpoint)).rejects.toThrow(
      errorMessage
    )
  })
})