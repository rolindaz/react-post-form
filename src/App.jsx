import { useState } from 'react'

function App() {

  return (
    <>
      {/* Text input for Author */}
      <div class="mb-3">
        <label for="author" class="form-label">
          Autore
        </label>
        <input
          type="text"
          class="form-control"
          value=''
          name="author"
          id="author"
          aria-describedby="helpId"
          placeholder="Type the author name here"
        />
        <small id="helpId" class="form-text text-muted">
          Author name
        </small>
      </div>

    </>
  )
}

export default App