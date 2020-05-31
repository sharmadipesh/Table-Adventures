import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getShipmentInfo} from 'redux/actions/Home';
import idx from 'idx';
import { Table,Tag,Input, Button, Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const { Column } = Table;

class Home extends Component {

	state = {
		tableColumnInformation:[],
		searchText: '',
		searchedColumn: '',
	}


    componentDidMount = async() =>{
        await this.props.getShipmentInfo();
    }

    getColumnSearchProps = dataIndex => ({
    	filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        	<div style={{ padding: 8 }}>
				<Input
					ref={node => {
					this.searchInput = node;
					}}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Reset
					</Button>
				</Space>
        	</div>
    	),
    	filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    	onFilter: (value, record) =>
        	record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    		onFilterDropdownVisibleChange: visible => {
        	if (visible) {
        			setTimeout(() => this.searchInput.select());
        	}
    	},
    	render: text =>
        	this.state.searchedColumn === dataIndex ? (
        		<Highlighter
					highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
					searchWords={[this.state.searchText]}
					autoEscape
					textToHighlight={text.toString()}
        		/>
        		) : (
        				text
        		),
    	});

    handleSearch = (selectedKeys, confirm, dataIndex) => {
    	confirm();
		this.setState({
			searchText: selectedKeys[0],
			searchedColumn: dataIndex,
		});
    };

    handleReset = clearFilters => {
		clearFilters();
		this.setState({ searchText: '' });
	};
	
	getTableValue = (value) =>{
		return {
				title: 'Type',
				dataIndex: 'type',
				key: 'type',
		}
	}

    render() {      
        const nameFilter = this.getColumnSearchProps('name');
        const idFilter = this.getColumnSearchProps('id');
        const destinationFilter = this.getColumnSearchProps('id');
        const originFilter = this.getColumnSearchProps('origin');
        const totalFilter = this.getColumnSearchProps('total');
        // const statusFilter = this.getColumnSearchProps('status');
        const userIdFilter = this.getColumnSearchProps('userId');

        return (
            <div className="mt-120 plr-35">
				<Table 
					dataSource={idx(this.props,_=>_.tableData)}
					showHeader={true}
					bordered
				>
					<Column 
						title="Id" 
						dataIndex="id" 
						key="id" 
						sorter={(a, b) => { return a.id.localeCompare(b.id)}}
						filterDropdown={idFilter.filterDropdown}
						filterIcon={idFilter.filterIcon}
						onFilter={idFilter.onFilter}
						onFilterDropdownVisibleChange={idFilter.onFilterDropdownVisibleChange}
						render={idFilter.render}
					/>
					<Column 
						title="Name" 
						dataIndex="name" 
						key="name" 
						sorter={ (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)}
						// sorter={(a, b) => a.id.localeCompare(b.id)}
						filterDropdown={nameFilter.filterDropdown}
						filterIcon={nameFilter.filterIcon}
						onFilter={nameFilter.onFilter}
						onFilterDropdownVisibleChange={nameFilter.onFilterDropdownVisibleChange}
						render={nameFilter.render}
					/>
					{/* <Column 
						title="cargo" 
						dataIndex="cargo" 
						key="cargo" 
						// sorter={ (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)}
						render={status => (
							<>
								<Table 
									pagination={false}
									size="small" 
									dataSource={status} 
									columns={[{
											title: 'Type',
											dataIndex: 'type',
											key: 'type',
										},{
											title: 'Description',
											dataIndex: 'description',
											key: 'description',
										},
										{
											title: 'Volume',
											dataIndex: 'volume',
											key: 'volume',
										}
									]} />
							</>
						)}
					/> */}
					<Column 
						title="Mode" 
						dataIndex="mode" 
						key="mode" 
						sorter={ (a, b) => a.mode.charCodeAt(0) - b.mode.charCodeAt(0)}
					/>  
					<Column 
						title="Type" 
						dataIndex="type" 
						key="type" 
						sorter={ (a, b) => a.type.charCodeAt(0) - b.type.charCodeAt(0)}
					/>  
					<Column 
						title="Destination" 
						dataIndex="destination" 
						key="destination" 
						sorter={ (a, b) => a.destination.charCodeAt(0) - b.destination.charCodeAt(0)}
						filterDropdown={destinationFilter.filterDropdown}
						filterIcon={destinationFilter.filterIcon}
						onFilter={destinationFilter.onFilter}
						onFilterDropdownVisibleChange={destinationFilter.onFilterDropdownVisibleChange}
						render={destinationFilter.render}
					/>  
					<Column 
						title="Origin" 
						dataIndex="origin" 
						key="origin" 
						sorter={ (a, b) => a.origin.charCodeAt(0) - b.origin.charCodeAt(0)}
						filterDropdown={originFilter.filterDropdown}
						filterIcon={originFilter.filterIcon}
						onFilter={originFilter.onFilter}
						onFilterDropdownVisibleChange={originFilter.onFilterDropdownVisibleChange}
						render={originFilter.render}
					/>  
					<Column 
						title="Total" 
						dataIndex="total" 
						key="total" 
						sorter={ (a, b) => a.total - b.total}
						filterDropdown={totalFilter.filterDropdown}
						filterIcon={totalFilter.filterIcon}
						onFilter={totalFilter.onFilter}
						onFilterDropdownVisibleChange={totalFilter.onFilterDropdownVisibleChange}
						render={totalFilter.render}
					/>  
					<Column 
						title="Status" 
						dataIndex="status" 
						key="status" 
						render={status => (
							<>
								<Tag color={status === 'COMPLETED' ?  'green' : status === 'NEW' ? 'warning': 'default'} key={status}>
								{status}
								</Tag>
							</>
						)}
						sorter={ (a, b) => a.status.charCodeAt(0) - b.status.charCodeAt(0)}
					/>
					<Column 
						title="UserId" 
						dataIndex="userId" 
						key="userId" 
						sorter={(a, b) => { return a.userId.localeCompare(b.userId)}}
						filterDropdown={userIdFilter.filterDropdown}
						filterIcon={userIdFilter.filterIcon}
						onFilter={userIdFilter.onFilter}
						onFilterDropdownVisibleChange={userIdFilter.onFilterDropdownVisibleChange}
						render={userIdFilter.render}
					/>  
        		</Table>
            </div>
            
        );
    }
}

// export default Home;
function mapStateToProps(state){
    return{
        tableData:state.Home.shipInformationData
    }
}

export default connect(mapStateToProps,{
    getShipmentInfo
})(Home);