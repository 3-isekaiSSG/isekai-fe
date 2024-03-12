export default function MiniFooter() {
  // TODO: 비회원 -> 로그인 버튼으로 변경 / 로그인 페이지로 연결
  // TODO: 회원 -> 로그아웃 버튼으로 변경 / 로그아웃 로직
  const isUser = false

  return (
    <footer className="bg-[#555] flex justify-center pt-[30px] pb-[170px]">
      <ul className="flex">
        <li className="text-[#cccccc] text-xs leading-8 pr-2.5 after:content-['|'] after:pl-2.5">
          고객센터
        </li>
        <li className="text-[#cccccc] text-xs leading-8 pr-2.5 after:content-['|'] after:pl-2.5">
          공지사항
        </li>
        <li className="text-[#cccccc] text-xs leading-8 pr-2.5 after:content-['|'] after:pl-2.5">
          입점상담
        </li>

        <li className="text-[#cccccc] text-xs leading-8 pr-2.5">
          {isUser ? '로그아웃' : '로그인'}
        </li>
      </ul>
    </footer>
  )
}
