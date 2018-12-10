import React from 'react';
import * as fiery from 'fiery';
import { firebase } from './firebase';
import { match } from 'react-router';
import { ErrorBox } from './ErrorBox';
import { toElement } from './toElement';

{/*
เนื่องจาก Component เป็น component ของการ 'route' ของ 'react-router' ดังนั้น ต้องมีการส่งค่า interface 'match' เข้ามาใน compoent ด้วย
ซึ่ง interface match นี้สามารถ กำหนด รูปแบบ parameter ที่จะเข้ามายัง component นี้ได้
อ้างอิงรูปแบบ ที่หน้า index.tsx ที่มี 2 parameter คือ userId และ screenId
<Route exact path="/Screens/:userId/:screenId" component={ScreenRoute} />

ความสามารถของ Component fiery คือเมื่อ fiery มีการ connect กับ Database Firebase แล้ว เมื่อมีการเปลี่ยนแปลงข้อมูลใด ๆ ที่
Database โดยตรง Component fiery จะมีการ refresh ตัวเองโดยอัตโนมัติ
*/}
export class ScreenRoute extends React.Component<{
    match: match<{ userId: string, screenId: string }>
}> {
    render() {
        return (
            <div>
                {/*fiery.Data component retrieve data from Firebase Realtime Database*/}
                <fiery.Data
                    dataRef={firebase
                        .database()
                        .ref('screens')
                        .child(this.props.match.params.userId)
                        .child(this.props.match.params.screenId)}
                >
                    {dataState => fiery.unwrap(dataState, {
                        error: (e, retry) => <ErrorBox error={e} retry={retry}>Cannot load screen data!</ErrorBox>,
                        loading: () => <div>(Loading screen data, please wait...)</div>,
                        completed: screenData => {
                            try {
                                const contents = JSON.parse(screenData.contents || 'null');
                                return toElement(contents);
                            } catch (e) {
                                return <ErrorBox error={e}>Cannot render screen: {String(e)}</ErrorBox>
                            }
                        }
                    })}
                </fiery.Data>
            </div>
        );
    }
}