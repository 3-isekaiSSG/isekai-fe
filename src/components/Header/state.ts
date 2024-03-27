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
    path: '/find-idpw',
    title: '아이디/비밀번호 찾기',
  },
  {
    id: 5,
    path: '/find-id-result',
    title: '아이디 찾기 결과',
  },
  {
    id: 6,
    path: '/pw-reset',
    title: '비밀번호 재설정',
  },
  {
    id: 7,
    path: '/join-auth-result',
    title: '신세계포인트 통합회원 가입',
  },
  {
    id: 8,
    path: '/myssg',
    title: 'MY SSG',
  },
]
