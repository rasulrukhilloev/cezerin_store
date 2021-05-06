import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../lib/settings';
import { deliveryData } from '../../locales/deliveryData';

class HomeContacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			townId: 0
		};
	}

	onTownChange = event => {
		this.setState({
			townId: event.target.value
		});
	};

	render() {
		const {
			props: { delivery = deliveryData, settings }
		} = this;

		return (
			<Fragment>
				<div className="contacts-company">
					<div className="contacts-company__address">
						{themeSettings.footer_contacts[0].text},{' '}
						{themeSettings.footer_contacts[1].text}
					</div>
					<div className="contacts-company__worktime contacts-worktime">
						<h3 className="contacts-worktime__title">Часы</h3>
						<div className="contacts-worktime__table">
							<div className="contacts-worktime__row">
								<div className="contacts-worktime__col">
									Понедельник-Суббота:
								</div>
								<div className="contacts-worktime__col">08:00-19:00</div>
							</div>
							<div className="contacts-worktime__row">
								<div className="contacts-worktime__col">Воскресенье:</div>
								<div className="contacts-worktime__col">09:00-17:00</div>
							</div>
						</div>
						<div className="contacts-company__call">
							<div className="contacts-company__phone">+998 (71) 202-99-99</div>
							<a
								href="tel:+998 (71) 202-99-99"
								className="contacts-company__button button button_call"
							>
								Позвонить
							</a>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default HomeContacts;
