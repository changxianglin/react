import { observable, action } from 'mobx'

class tablesStore {
    @observable flag = true
    @observable dataSource = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '2',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '3',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '4',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '5',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '6',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '7',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '8',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '9',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },{
        key: '10',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '10',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }]

    @observable columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }];
      
      @observable columns2 = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }];

      @observable columns3 = [{
        title: '测试',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '测试',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '测试',
        dataIndex: 'address',
        key: 'address',
      }];

      @action handleToggleTable = () => {
          this.flag = !this.flag
      }
}

export default tablesStore