import { useState } from 'react'

function App() {

  const url = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [publish, setPublish] = useState(false)

  function handleAuthorChange(e) {
    setAuthor(e.target.value)
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleBodyChange(e) {
    setBody(e.target.value)
  }

  function handlePublishChange(e) {
    setPublish(e.target.checked)
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4">
          <form>
            {/* Text input for Author */}
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                value={author}
                name="author"
                id="author"
                aria-describedby="helpId"
                placeholder="Type the name of the author here"
                onChange={handleAuthorChange}
              />
            </div>
            {/* Text input for Title */}
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                name="title"
                id="title"
                aria-describedby="helpId"
                placeholder="Type the title of the post here"
                onChange={handleTitleChange}
              />
            </div>
            {/* Textarea input for Body */}
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Post Content
              </label>
              <textarea className="form-control"
                name="body"
                value={body}
                id="body"
                rows="3"
                placeholder='Enter the content of your post here'
                onChange={handleBodyChange}
              >
              </textarea>
            </div>
            {/* Checkbox input for Publish */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name='publish'
                id="publish"
                onChange={handlePublishChange}
              />
              <label className="form-check-label" htmlFor="publish">
                Publish this post?
              </label>
            </div>
            <button className='btn btn-primary mt-3' type="submit">
              Add New Post
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App