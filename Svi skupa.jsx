function MyForm() {
  return (
    <form>
      <label>Id:
        <input type="text" />
      </label>
      <label>avatar url:
        <input type="text" />
      </label>

      <label>location:
        <input type="text" />
      </label>

      <label>name:
        <input type="text" />
      </label>

      <label>bio:
        <input type="text" />
      </label>



    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);