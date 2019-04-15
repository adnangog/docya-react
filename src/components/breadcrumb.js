import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Breadcrumb(props) {
  const { data = [{
    "label": "Anasayfa",
    "link": "/"
  }] } = props;
  return (
    <AntBreadcrumb className="bc" separator=">">
      <AntBreadcrumb.Item className="bc-icon"><FontAwesomeIcon icon={faAngleDoubleRight} /></AntBreadcrumb.Item>
      {data.map((x, i) => data.length === i + 1 ? <AntBreadcrumb.Item key={i} className="active">{x.label}</AntBreadcrumb.Item> : <AntBreadcrumb.Item key={i}><Link to={x.link}>{x.label}</Link></AntBreadcrumb.Item>)}
    </AntBreadcrumb>
  )
}
