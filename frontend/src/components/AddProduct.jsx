
export default function AddProduct() {
  return (
    <div>
        <h1>add product</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="productName">product name</label>
                <input type="text" name="productName" id="productName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="amount">amount</label>
                <input type="number" name="amount" id="amount" />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity">quantity</label>
                <input type="number" name="quantity" id="quantity" />
            </div>
            <button>add product</button>
        </form>
    </div>
  )
}
