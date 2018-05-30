import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles, Paper, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import developerStyle from '../../assets/jss/components/developerStyle';

class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.banner} />
        <div className={classes.floor}>
          <Paper
            classes={{
              root: classes.paperRoot,
            }}
          >
            <Typography variant="title" gutterBottom align="center">
              Developer
            </Typography>
            <Grid container spacing={40}>
              <Grid item md={4} xs>
                <img
                  className={classes.img}
                  src="../../images/thao-dien.png"
                  alt="first slide"
                />
                <Typography variant="body1" gutterBottom align="justify">
                  Công ty Cổ phần Đầu tư Thảo Điền được thành lập vào ngày 09 tháng 02 năm 2007.
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  Với mục tiêu “phát triển bền vững” trong lĩnh vực bất động sản, Công ty CP Đầu tư Thảo Điền đã lựa
                  chọn hợp tác với những đơn vị uy tín với sự đầu tư toàn diện và cam kết về tiến độ để tạo nên những
                  sản phẩm chất lượng tốt nhất cho khách hàng.
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  Chúng tôi hy vọng sẽ xây dựng được một không gian sống lý tưởng, đẳng cấp cho cư dân Masteri Thảo
                  Điền.
                </Typography>
              </Grid>
              <Grid item md={4} xs>
                <img
                  className={classes.img}
                  src="../../images/tap-doan-vingroup.png"
                  alt="first slide"
                />
                <Typography variant="body1" gutterBottom align="justify">
                  Tập đoàn Vingroup được thành lập tại Ukraina
                  năm 1993. Từ năm 2000, Vingroup trở về Việt Nam đầu tư với ước vọng được góp phần xây dựng đất nước,
                  tập trung đầu tư vào các lĩnh vực du lịch và bất động sản (BĐS) với nhiều nhóm thương hiệu, như:
                  Vinhomes, Vincom, Vinpearl, Vinmec, Vinschool.
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  Kết hợp với Thảo Điền Investment, chúng tôi
                  mong muốn tạo dựng một khu dân cư đầy đủ tiện nghi, hiện đại và hoàn hảo phục vụ cho nhu cầu của người
                  dân sống tại Masteri Thảo Điền.
                </Typography>
              </Grid>
              <Grid item md={4} xs>
                <img
                  className={classes.img}
                  src="../../images/techcombank.png"
                  alt="first slide"
                />
                <Typography variant="body1" gutterBottom align="justify">
                  Được thành lập ngày 27/09/1993 với số vốn ban đầu là 20 tỷ đồng, trải qua 20 năm hoạt động, đến nay
                  Techcombank đã trở thành một trong những ngân hàng thương mại cổ phần hàng đầu Việt Nam với tổng tài
                  sản đạt trên 180.874 tỷ đồng.
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  Thấu hiểu nhu cầu mua nhà của người Việt Nam, cùng với tầm nhìn & mục tiêu của Thảo Điền, Techcombank
                  cam kết trở thành Ngân hàng tài trợ vốn cho dự án và cam kết chi trả toàn bộ các lợi ích cho khách
                  hàng theo quy định tại hợp đồng trong trường hợp căn hộ không được bàn giao đúng hạn theo Hợp Đồng Mua
                  Bán. Bên cạnh đó, để hỗ trợ khách hàng dễ dàng sở hữu căn hộ lý tưởng tại Masteri Thảo
                  Điền.Techcombank còn cung cấp những sản phẩm tài chính hấp dẫn và linh hoạt nhất.
                </Typography>
              </Grid>
              <Grid item md={4} xs>
                <img
                  className={classes.img}
                  src="../../images/coteccons.png"
                  alt="first slide"
                />
                <Typography variant="body1" gutterBottom align="justify">
                  Coteccons là một trong những Công ty xây dựng hàng đầu tại Việt Nam chuyên thi công các công trình dân
                  dụng và công nghiệp chất lượng cao, đòi hỏi kỹ thuật phức tạp, đặc biệt là lĩnh vực nhà cao tầng.
                  Coteccons tự hào đã xây dựng được một thương hiệu Việt Nam lớn mạnh, được công nhận về uy tín và chất
                  lượng công trình, đáp ứng được các yêu cầu cao về tiến độ và an toàn lao động.
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                  Hợp tác xây dựng dự án Masteri Thảo Điền sẽ mang ý nghĩa “3 nhất” đối với Coteccons: dự án có tiến độ
                  thực hiện nhanh nhất; dự án cao tầng có diện tích sàn lớn nhất (43 tầng với hơn 370.000 m2 sàn); và dự
                  án nhà ở có giá trị hợp đồng lớn nhất tính đến nay.
                </Typography>
              </Grid>
              <Grid item md={4} xs>
                <img
                  className={classes.img}
                  src="../../images/nqh.png"
                  alt="first slide"
                />
                <Typography variant="body1" gutterBottom align="justify">
                  Công ty TNHH Kiến trúc NQH, là công ty hàng đầu trong lĩnh vực thiết kế kiến trúc và quy hoạch đô thị
                  tại Việt Nam, đã thực hiện trên 400 dự án khắp Đông Nam Á gồm cao ốc văn phòng, căn hộ cao cấp, cao ốc
                  phức hợp. NQH quy tụ các kỹ sư, lập trình viên, các đơn vị thiết kế cảnh quan, thiết kế nội thất và
                  các đơn vị tư vấn cơ điện và kết cấu tại Việt Nam, Châu Á và Hoa kỳ.
                </Typography>
              </Grid>
              <Grid item md={4} xs>
                <img
                  className={classes.img}
                  src="../../images/ptw.png"
                  alt="first slide"
                />
                <Typography variant="body1" gutterBottom align="justify">
                  PTW Architects được thành lập tại Sydney vào năm 1889, đã từng tham gia thiết kế hơn 50 tòa nhà văn
                  phòng thương mại ở Sydney và hơn 150 công trình khác trên khắp nước Úc, New Zealand và Đông Nam Á (gồm
                  Hà Nội và Tp. Hồ Chí Minh). PTW Architects mang đến sự vượt trội trong quy hoạch tổng thể cũng như
                  thiết kế kiến trúc bền vững thân thiện với môi trường qua nhiều loại công trình đa dạng khác nhau.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Developer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(developerStyle)(Developer)));
