import React from 'react'
import '../App.css'
import HeroSec from './HeroSec'
import InputSec from './InputSec'
import CardArea from './CardArea'
import BottomText from './BottomText'

class Body extends React.Component {
    constructor(){
        super()
        this.textRef = React.createRef()
        this.state = {
            value:[],
            shortedURL:[],
            info: [],
        }  
    }
    componentDidMount(){
        this.getData()
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            value:[...this.state.value,this.textRef.current.value]
        })
        this.generateURL(this.textRef.current.value)
        this.textRef.current.value = ''
    }
    generateURL = value => {
        const link = "https://rel.ink/api/links/";
        fetch(link,{
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    'url': value
                })
            }).then(res => res.json()).then(data => {this.setState({
                shortedURL:[...this.state.shortedURL,data]
            }); console.log(this.state.shortedURL);this.saveData();this.getData();
            });
        
    }
    copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };
    updateButton = event => {
        var select = event.target;
        select.innerHTML = 'Copied!';
        select.classList.add('active');
    }
    saveData = () => {
        const arr = this.state.shortedURL.map((item) => {
            var link = `https://rel.ink/${item.hashid}`
            var url = item.url
            return ({
                link,
                url
            });
        })
  
        for(var i of arr){
            localStorage.setItem(i.url,i.link);
        }
        this.setState({
            info:[]
        })
        var obj = Object.keys(localStorage).reduce(function(obj, str) { 
            obj[str] = localStorage.getItem(str); 
            return obj
        }, {});
        this.setState({
            info:[...this.state.info,obj]
        })
    }
    getData = () => {
        var obj = [];
        this.setState({
            info:[]
        })
        for(var k=0;k<localStorage.length;k++){
            let keys = localStorage.key(k);
            let value = localStorage[keys];
            obj = [...obj,{url : keys,link: value,}] 
        }
        this.setState({
            info:[...this.state.info,...obj]
        })
    }

    render(){
        const list = this.state.info.map((item) => {
            var link = item.link
            return <li key={item.url}>
                        <p>{item.url}</p>
                        <div className="short-link">
                            <a href={link} rel="noopener noreferrer" target="_blank">{link}</a>
                            <button className="btn" onClick={(e) => {this.copyToClipboard(link);this.updateButton(e)} }>copy</button>
                        </div>
                    </li>
        })
        return (
            <div className="wrapper">
                <HeroSec />
                <InputSec HandleSubmit={this.handleSubmit} TextRef={this.textRef} List={list}/>
                <CardArea />
                <BottomText />
            </div>
        )
    }
}
export default Body