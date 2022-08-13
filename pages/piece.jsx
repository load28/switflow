export default function Piece() {
  const list = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9', 'item-10'];
  return <>
    <div className="overflow-x-hidden overflow-y-auto px-8 py-12 h-full">
      {
        list.map((item) => {
          return(<Item key={item} item={item}/>)
        })
      }
    </div>
  </>
}

function Item({item}) {
  return <>
    <div className="bg-stone-100 h-24 w-auto rounded-md mb-8" >
      {item}
    </div>
  </>
}
