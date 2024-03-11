import Link from 'next/link'
import Image from 'next/image'
import styles from './MainNav.module.css'

interface NavType {
  id: number
  title: string
  url: string
}

export default function MainNav() {
  const NavItems: NavType[] = [
    {
      id: 1,
      title: '홈',
      url: '/',
    },
    {
      id: 2,
      title: '특가',
      url: '/',
    },
    {
      id: 3,
      title: '베스트',
      url: '/',
    },
    {
      id: 4,
      title: '명품',
      url: '/',
    },
    {
      id: 5,
      title: '뷰티',
      url: '/',
    },
    {
      id: 6,
      title: '패션',
      url: '/',
    },
    {
      id: 7,
      title: 'SSG.TV',
      url: '/',
    },
    {
      id: 8,
      title: '브랜드',
      url: '/',
    },
  ]

  return (
    <nav className="sticky flex w-full h-[46px] left-0 top-0 bg-[color:var(--m-colors-white)]">
      <ul className="w-full h-full overflow-y-hidden flex flex-row items-center justify-between whitespace-nowrap scrollbar-hide">
        {NavItems.map((tab: NavType) => {
          return (
            <li key="tab.id" className={styles.li}>
              <Link className={styles.link} href={tab.url}>
                {tab.title === 'SSG.TV' ? (
                  <div className={styles.div}>
                    <Image
                      alt="쓱TV"
                      src="https://sui.ssgcdn.com/cmpt/banner/202402/2024022816022058499040766014_217.png"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <span>{tab.title}</span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
