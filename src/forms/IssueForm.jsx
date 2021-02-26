import React from 'react'
import Loader from 'react-spinners/ClipLoader'
import Editor from '../components/common/editor/Editor'

function IssueForm({ value, submit, setValue, submitting }) {
  return (
    <form onSubmit={submit} className='issueform'>
      <div className='formgroup'>
        <label htmlFor='title'>Title</label>
        <input
          placeholder='title'
          name='title'
          className='formgroup__control'
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        />
      </div>
      <div className='formgroup'>
        <label htmlFor='description'>description</label>
        <Editor setValue={setValue} value={value} />
      </div>
      <button
        type='submit'
        className={
          submitting ? 'btn btn__submitissue disabled' : 'btn btn__submitissue'
        }
        disabled={submitting}>
        {submitting ? <Loader size={20} color='#fff' /> : 'Submit Issue'}
      </button>
    </form>
  )
}

export default IssueForm
