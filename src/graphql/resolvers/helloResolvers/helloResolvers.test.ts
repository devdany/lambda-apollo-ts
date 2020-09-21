import handleResolvers from './index'

describe('HandleResolvers', () => {
  it('getHello', () => {
    expect(handleResolvers.Query.getHello()).toBe('hello world')
  })
})