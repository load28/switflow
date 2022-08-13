export default function Piece() {
  const list = ['item-1', 'item-2', 'item-1', 'item-2', 'item-1', 'item-2', 'item-1', 'item-2', 'item-1', 'item-2'];
  return <>
    <div className="overflow-x-hidden overflow-y-auto my-12 mx-8">
      {
        list.map((item) => {
          return <>
            <Item key={item} item={item}/>
          </>
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
