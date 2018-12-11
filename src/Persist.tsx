import React from 'react';

// เป็น Component สำหรับ ควบคุม State ที่อยู่ใน Local Storage (เวลากด Refresh F5 จะเก็บข้อมูลใน Local Storage)
export class Persist extends React.Component<{
    stateKey: string
    defaultState: any
    children: (state: any, update: (oldState: any) => any) => React.ReactNode
}> {
    state = {
        data: this.getInitialData()
    }
    getInitialData() {
        const stateKey = this.props.stateKey;
        if (stateKey in localStorage) {
            try {
                return JSON.parse(localStorage[stateKey]);
            } catch (e) {
                console.error('Cannot restore state:', e);
            }
        }
        return this.props.defaultState;
    }
    render() {
        return this.props.children(this.state.data, (f) => {
            const json = JSON.stringify(f(this.state.data));
            const nextData = JSON.parse(json);
            const stateKey = this.props.stateKey;
            localStorage[stateKey] = json;
            this.setState({ data: nextData });
        });
    }
}
