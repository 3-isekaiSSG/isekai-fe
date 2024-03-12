import GoToBack from './GoToBack'
import GoToTop from './GoToTop'

export default function index() {
  return (
    <div className="fixed z-[99] bottom-[66px] inset-x-0">
      <div className="absolute left-4 bottom-0">
        <GoToBack />
      </div>
      <div className="absolute right-4 bottom-0">
        <GoToTop />
      </div>
    </div>
  )
}
