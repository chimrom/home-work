import { useEffect, useState, Component } from 'react';
import '../../utils/jqueryWrapper.js'

export class JsTask1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: 0,
            message: ''
    }
        this.ajaxProm = this.ajaxProm.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)

}
    ajaxPromise(url, options) {
        return new Promise((resolve, reject) => {
            $.ajax(url, options)
                .done((response) => {
                    resolve(response);
                })
                .fail((error) => {
                    reject(error);
                });
        });
    }

    ajaxProm() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get',
            dataType: 'json',
            success: (data) => {
                this.setState({post: data.length})
            },
            error: (error) => {
                console.error(error)
            }
        })
    }

    confirmDialog(message) {
        return new Promise((resolve, reject) => {
            const result = confirm(message);
            if (result) {
                resolve();
            } else {
                reject();
            }
        });
    }

    handleConfirm() {
        this.confirmDialog("Вы уверены?").then(() => {
            this.setState({message: "Пользователь выбрал 'да'"});
        }).catch(() => {
            this.setState({message: "Пользователь выбрал 'нет'"});
        })
    }
    componentDidMount() {
        this.ajaxPromise('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
            .then((response) => {
                this.setState({post: response.length})
            })
            .catch((error) => {
                console.log('Error:', error);
            });


    }
    render() {
        return (
        <div id="myElement">
            <div>
            <button onClick={this.ajaxProm}>Get</button>
            Всего постов {this.state.post}
            </div>
            <div>
                <button onClick={this.handleConfirm}>confirm</button>
                {this.state.message}

            </div>
        </div>
        )
    }
};