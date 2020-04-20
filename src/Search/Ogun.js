import React, { Component } from 'react'
import policeOgunList from './api/ogunpolice.json'
import { faPhone, faSms, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Ogun extends Component {
    state = {
        search: ""
      };
      
    renderPoliceOgun = policeOgun => {
        const { search } = this.state

        return(
            <div className="intro-y col-span-12 md:col-span-6" key={policeOgun.number}>
                <div className="box">
                    <div className="flex flex-col lg:flex-row items-center p-5">
                        <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                            <a href="" className="font-medium">{policeOgun.name}</a>
                            <div className="text-gray-600 text-xs"></div>
                        </div>
                        <div className="flex mt-4 lg:mt-0">
                            <a href={"tel:" + policeOgun.number} className="button button--sm text-white bg-theme-1 mr-2"><FontAwesomeIcon icon={faPhone} /></a>
                            <a href={"sms:" + policeOgun.number} className="button button--sm text-gray-700 border border-gray-300"><FontAwesomeIcon icon={faSms} /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onchange = e => {
        this.setState({ search: e.target.value });
      };

    render() {
        const { search } = this.state;
        const filteredOgunPolices = policeOgunList.filter(policeOgun => {
        return policeOgun.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (

                <div className="content">
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
                            <div className="w-full md:w-auto mt-3 md:mt-0 md:ml-auto md:ml-0">
                                <div className="w-56 relative text-gray-700">
                                    <input 
                                    type="text" 
                                    className="input w-56 box pr-10 placeholder-theme-13" 
                                    placeholder="Search..." 
                                    onChange={this.onchange}
                                    />
                                    <FontAwesomeIcon className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" icon={faSearch} />
                                </div>
                            </div>
                        </div>
                        {filteredOgunPolices.map(policeOgun => {
                                return this.renderPoliceOgun(policeOgun);
                            })}
                    </div>
                </div>
        )
    }
}
