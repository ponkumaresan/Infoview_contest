import { List, Avatar, Button, Skeleton } from 'antd';
import { Layout } from 'antd';
import React, { useEffect ,useState} from 'react';
const { Header, Content, Footer, Sider } = Layout;

const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function Forum () {

const [initLoading, setInitLoading] = useState(true);
const [loading, setLoading] = useState(false);
let [data, setData] = useState([]);
let [list, setList] = useState([]);

 useEffect(()=>
  {
      let mounted = true;
       if(mounted) {
       mounted=false;
  fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {

          setInitLoading(false);
          setData( res.results);
          setList( res.results);
          }
      );
      }
  },[initLoading])

  /*function onLoadMore(data) {
      setLoading(true);
      setList( data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })),
      ));

    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const datatemp = data.concat(res.results);
        setData(data);
            setList (datatemp);
            setLoading( false);

         *//* () => {

            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
            },*//*
          },
        );

  };
*/
/*    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={()=>onLoadMore(data)}>loading more</Button>
        </div>
      ) : null;*/

    return (
    <div>
    <Header className="header">
    </Header>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
      </div>
    );

}

export default Forum;

