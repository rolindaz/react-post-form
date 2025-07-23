import { useState } from 'react'

function App() {

  return (
    <>
      {/* Text input for Author */}
      <div class="mb-3">
        <label for="author" class="form-label">
          Author
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
      {/* Text input for Title */}
      <div class="mb-3">
        <label for="Title" class="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          value=''
          name="title"
          id="title"
          aria-describedby="helpId"
          placeholder="Type the title of the post here"
        />
        <small id="helpId" class="form-text text-muted">
          Post Title
        </small>
      </div>
      {/* Textarea input for Body */}
      <div class="mb-3">
        <label for="body" class="form-label"></label>
        <textarea class="form-control"
          name="body"
          value=''
          id="body"
          rows="3"
          placeholder='Enter the content of your post here'
        >
        </textarea>


      </div>


    </>
  )
}

export default App