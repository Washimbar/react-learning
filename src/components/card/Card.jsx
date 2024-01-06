import React from "react";
import styles from "./card.module.css";

const Card = ({ allPerson }) => {
	return (
		<div className={styles.card}>
			{allPerson?.map((person, index) => {
				return (
					<div key={index}>
						<h2>{person?.name}</h2>
						<h3>{person?.age}</h3>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
