import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { addToDoList } from '../../Store/actions/actions';
import { useState } from 'react';
import { todosRemainingSelector } from '../../Store/selector';

export default function TodoList() {

  const [todoName, setToDoName] = useState("");

  const [prioriry, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();

  const handleAddToDo = () => {
    dispatch(addToDoList({
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority: prioriry,
    }))
    setToDoName("")
    setPriority("Medium")
  }

  const handleChangeName = (name) => {
    console.log(name.target.value);
    setToDoName(name.target.value);
  }

  const handleChangePriority = (prioriry) => {
    setPriority(prioriry);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo) => <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleChangeName} />
          <Select defaultValue="Medium" value={prioriry} onChange={handleChangePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddToDo} >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
