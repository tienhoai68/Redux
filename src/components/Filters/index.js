import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { filterPriotityActions, filterSearchText, statusFilterChange } from '../../Store/actions/actions';

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [filterOptions, setFilterOptions] = useState("All");
  const [filterPriotity, setFilterPriority] = useState([]);

  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(filterSearchText(e.target.value));
  }

  const handleChangeOptions = (e) => {
    setFilterOptions(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }


  const handleFilterPriority = (e) => {
    setFilterPriority(e)
    dispatch(filterPriotityActions(e))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={searchText} onChange={handleChangeSearch} placeholder='input search text' />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterOptions} onChange={handleChangeOptions}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriotity}
          onChange={handleFilterPriority}
        >
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
      </Col>
    </Row>
  );
}
