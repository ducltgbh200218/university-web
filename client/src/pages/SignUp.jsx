import {Button, Label, TextInput} from 'flowbite-react'

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className='p-3 max-w-3xl mx-auto md:item-center'>
        <form className='flex flex-col gap-4'>
            <div>
                <Label value='Enter username' />
                <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
                <Label value='Enter email' />
                <TextInput type='text' placeholder='Email' id='username' />
            </div>
            <div>
                <Label value='Enter password' />
                <TextInput type='text' placeholder='Password' id='username' />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  )
}
