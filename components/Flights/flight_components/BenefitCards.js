import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faStar, faPhoneVolume , faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const benefitData = [
  {
    id: 1,
    title: 'Deals and Discounts',
    description: 'Find budgeted flights with us and travel within your budget; get your hands on the exclusive discounts now!',
    icon: faMoneyBillWave,
    bgColor: 'bg-secondary',
    textColor: 'text-gray-9',
    iconColor: 'text-secondary'
  },
  {
    id: 2,
    title: 'Customized Itineraries',
    description: 'Share your travel priorities with our experts, and plan a trip that suits your preferences and budget.',
    icon: faStar,
    bgColor: 'bg-orange',
    textColor: 'text-white',
    iconColor: 'text-orange'
  },
  {
    id: 3,
    title: '24*7 Customer Service',
    description: 'Connect with our travel experts whenever you need, and seek immediate assistance from them.',
    icon: faPhoneVolume ,
    bgColor: 'bg-purple',
    textColor: 'text-white',
    iconColor: 'text-purple'
  },
  {
    id: 4,
    title: 'Simplified Bookings',
    description: 'Contact us to easily book flight tickets to your dream destination, and stay away from all the hassle.',
    icon: faPlaneDeparture,
    bgColor: 'bg-teal',
    textColor: 'text-white',
    iconColor: 'text-teal'
  }
];

const BenefitCards = () => {
  return (
    <div>
      <section className="section benefit-section bg-light-300">
        <div className="container">
          <div className="row g-4">
            {benefitData.map((benefit) => (
              <div key={benefit.id} className="col-sm-6 col-lg-3 d-flex">
                <div className="card benefit-card mb-0 flex-fill wow fadeInUp" data-wow-delay="0.2s">
                  <div className="card-body text-center">
                    <div className={`benefit-icon mb-2 ${benefit.bgColor} ${benefit.textColor} mx-auto`}>
                    <FontAwesomeIcon icon={benefit.icon} />

                    </div>
                    <h5 className="mb-2">{benefit.title}</h5>
                    <p className="mb-0">{benefit.description}</p>
                    <span className={`icon-view ${benefit.iconColor}`}>
                      <FontAwesomeIcon icon={benefit.icon} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitCards;
