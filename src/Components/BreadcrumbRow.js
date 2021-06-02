import react from "react";
import { Breadcrumb } from "react-bootstrap";

class BreadcrumbRow extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Breadcrumb style={this.props.style} className={this.props.className}>
          {this.props.breadcrumbList &&
            this.props.breadcrumbList.map((item, index) => {
              if (index === this.props.breadcrumbList.length - 1) {
                return (
                  <Breadcrumb.Item
                    key={index}
                    style={this.props.itemStyle}
                    className={this.props.itemClassName}
                    href={item.href}
                    active
                  >
                    {item.name}
                  </Breadcrumb.Item>
                );
              } else {
                return (
                  <Breadcrumb.Item
                    style={this.props.itemStyle}
                    className={this.props.itemClassName}
                  >
                    {item.name}
                  </Breadcrumb.Item>
                );
              }
            })}
        </Breadcrumb>
      </>
    );
  }
}

export default BreadcrumbRow;
