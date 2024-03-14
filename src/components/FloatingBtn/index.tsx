import GoToBack from './GoToBack'
import GoToTop from './GoToTop'

export default function index() {
  return (
    <div className="fixed z-[99] bottom-[66px] inset-x-0">
      <div className="absolute bottom-0 left-4">
        <GoToBack />
      </div>
      <div className="absolute bottom-0 right-4">
        <GoToTop />
      </div>
    </div>
  )
}
