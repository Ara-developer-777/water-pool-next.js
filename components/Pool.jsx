import Water from "./Water";

export default function Pool({count}) {

  const safeCount = Math.max(count, 0);

  return (
    <div className="Pool">
        {
            Array(safeCount).fill(0).map((_, index) => (<Water key={index}/>))
        }
    </div> 
  )
}
