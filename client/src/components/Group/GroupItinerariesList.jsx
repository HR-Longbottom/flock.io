import React, { useState, useEffect } from "react";
import GroupItinerary from "./GroupItinerary";

function GroupItinerariesList(props) {

  return (
    <div className='groupItinerariesList'>
      <h4>Group Members' Itineraries</h4>
      <div className='group-itineraries-collection'>

      {Object.keys(props.membersNames).map((person, idx) => {return <GroupItinerary itinerary={props.groupItineraries[person]} name={props.membersNames[person]} key={person+idx.toString()}/>})}
      </div>
    </div>
  )
}


export default GroupItinerariesList;