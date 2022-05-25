import React, { PureComponent } from 'react'
import "./map.scss"

export default class maps extends PureComponent {
  render() {
    return (
      <div className='map' id='map'>
        <div align="center">
        <iframe title="maps"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.611368589674!2d-7.991225984522883!3d31.617107149521676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee4f1b2c320b%3A0xfdc76aef839e6ece!2sSaadien&#39;s%20Tombs!5e0!3m2!1sen!2sua!4v1638244491625!5m2!1sen!2sua" width="100%" height="600px" ></iframe>
      <p>Rue de La Kasbah, Marrakesh 40000, Morocco</p>
      </div>
      </div>
    )
  }
}
