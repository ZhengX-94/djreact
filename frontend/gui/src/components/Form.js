import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';



class CustomForm extends React.Component{



  
 

  handleFormSubmit = (values, requestType, articleID) => {
        console.log("start...");
        const title = values.title;
        const content = values.content;
        console.log(title, content);
        switch (requestType) {
          case 'post':
            return axios.post('http://127.0.0.1:8000/api/',{
              title: title,
              content: content
            })
            .then(res => console.log(res))
            .catch(error => console.err(error));
          case 'put':
            return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
              title: title,
              content: content
            })
            .then(res => console.log(res))
            .catch(error => console.err(error));
        }

        
    }

    




    render(){
        return(
            
            <div>
      <Form onFinish={(event) => this.handleFormSubmit(
          event,
          this.props.requestType,
          this.props.articleID )}>
        <Form.Item  name="title" label="Title">
          <Input  placeholder="Put a title here" />
        </Form.Item>
        <Form.Item name="content" label="Content">
          <Input  placeholder="Enter some content" />
        </Form.Item>
        <Form.Item >
      <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
        </Form.Item>
      </Form>
    </div>
        )
    };
}


export default CustomForm;



