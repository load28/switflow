export default function Piece() {
  const list = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9', 'item-10'];
  return <>
    <div className="overflow-x-hidden overflow-y-auto px-4 py-12 h-full">
      {
        list.map((item) => {
          return (<Item key={item} item={item}/>)
        })
      }
    </div>
  </>
}

function Item({item}) {
  return <>
    <div className="bg-gray-800 h-24 w-auto rounded-md mb-8 outline outline-gray-700 outline-2
    cursor-pointer text-white px-6  py-6">
      {item}
    </div>
  </>
}
