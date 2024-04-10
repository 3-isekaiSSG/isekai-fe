import MyLikeFilter from '@/containers/my-clip/MyLikeFilter'
import MyLikeFolder from '@/containers/my-clip/MyLikeFolder'
import MyLikeItemArea from '@/containers/my-clip/MyLikeItemArea'

export default function Page() {
  return (
    <div className="overscroll-none">
      <MyLikeFolder />
      <MyLikeFilter />
      <MyLikeItemArea />
    </div>
  )
}
