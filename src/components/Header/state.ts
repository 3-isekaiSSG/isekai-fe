interface HeaderType {
  id: number
  path: string
  title: string
}

export const HeaderList: HeaderType[] = [
  {
    id: 0,
    path: '/login',
    title: '로그인',
  },
  {
    id: 1,
    path: '/join-intro',
    title: '회원가입',
  },
  {
    id: 2,
    path: '/join-email',
    title: '간편회원가입',
  },
  {
    id: 3,
    path: '/join-auth',
    title: '신세계포인트 통합회원 가입',
  },
  {
    id: 4,
    path: '/join-agree',
    title: '신세계포인트 통합회원 가입',
  },
  {
    id: 5,
    path: '/join-auth-result',
    title: '신세계포인트 통합회원 가입',
  },
  {
    id: 6,
    path: '/join-form',
    title: '신세계포인트 통합회원 가입',
  },
  {
    id: 7,
    path: '/find-idpw',
    title: '아이디/비밀번호 찾기',
  },
  {
    id: 8,
    path: '/find-id-result',
    title: '아이디 찾기 결과',
  },
  {
    id: 9,
    path: '/pw-reset',
    title: '비밀번호 재설정',
  },
  {
    id: 10,
    path: '/myssg',
    title: 'MY SSG',
  },
  {
    id: 11,
    path: '/non-login',
    title: '비회원 조회하기',
  },
  {
    id: 12,
    path: '/non-order',
    title: '비회원 주문하기',
  },
]
