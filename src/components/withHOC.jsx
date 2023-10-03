import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");


function withHOC(Component) {
    return function Wrapper(props) {
      const [dataTime, setDataTime] = useState(null);
  
      useEffect(() => {
        let event = moment(props.date.date);
        console.log(event._i)
        setDataTime(event.startOf("hour").fromNow());
      }, [props]);
  
      const componentName =
        Component.displayName || Component.name || "Component";
      Wrapper.displayName = `withHOC${componentName}`;
  
      return <Component data={dataTime} />;
    };
  }

  export default withHOC;