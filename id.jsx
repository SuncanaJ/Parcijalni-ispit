function MyForm() {
  return (
    <form>
      <label>Identifikacijska oznaka
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);