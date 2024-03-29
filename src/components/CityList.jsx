import PropTypes from 'prop-types';
import Spinner from "./Spinner"
import styles from "./CityList.module.css"
import CityItem from "./CityItem"
import Message from "./Message"

function CityList({cities,isLoading}) {
    if (isLoading) return <Spinner />
    if (!cities.length) 
    return (
        <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.CityList}>
        {cities.map((city) =>(
            <CityItem city={city} key={city.id}/> 
        ))}
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired, // Assuming cities is an array
    isLoading: PropTypes.bool.isRequired // Assuming isLoading is a boolean
    
};

export default CityList