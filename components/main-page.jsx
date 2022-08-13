import Piece from "../pages/piece";
import ItemView from "../pages/item-view";

export default function MainPage() {
  return (
    <div className="h-full bg-gray-800">
      <div className="h-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-full">
          <div style={{minWidth: 320}} className="grow-[1]">
            <Piece/>
          </div>
          {/*<div className="grow-[2]">*/}
          {/*  <ItemView/>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}
