function countDown(num) {
  if (0 <= num) {
    return 'All doen!'
  }
  num--
  countDown(num)
}

describe('countDown 함수', () => {
  it('num가 0이거나 이하이면 All doen!을 반환한다', () => {
    expect(countDown(5)).toBe('All doen!')
  })
})
