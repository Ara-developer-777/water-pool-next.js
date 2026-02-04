
export default function Button({add, remove, stop}) {
  return (
    <div className="Button">
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}
