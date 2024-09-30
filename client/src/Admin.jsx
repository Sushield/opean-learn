import {useForm} from 'react-hook-form';
import axios from 'axios';

function Admin(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues : {
      imgP : "NULL"
    }
  });

  async function formHandler(formData) {
    axios.post("https://sarazaiten.el.r.appspot.com/addPrompt" , {title : formData.title , prompt : formData.prompt , img : formData.imgP}) 
  }
  return(
    <div> 
      <form onSubmit={handleSubmit(formHandler)}>
        <label for="Title">Title</label>
        <input name="Title" id="title" type="text-area" {...register("title" , {required : true})} />
        <br/>
        <label for="Prompt">Text Prompt</label>
        <input name="Prompt" id="prompt" type="text-area" {...register("prompt" , {required : true})} />
        <br/>
        <label for="imgP">Image Prompt</label>
        <input name="imgP" id="imgPrompt" type="text-area" {...register("imgP" , {required : true})} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Admin;
