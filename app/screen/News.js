import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import CheckBox from "../components/Checkbox";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import HeaderBg from "../components/HeaderBackground";
import Dropdown from "../components/Select";

import styles from "../../app/style/style";
import functions from "../../app/function/function";
import { ScrollView } from "react-native-gesture-handler";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const image3 = require("../../app/assets/downright-3.png");

var title;

class News extends Component {
  state = {
    data: {
      name: "",
      phone: "",
      address: "",
      token: "",
    },
    messageError: "",
    messageSuccess: "",
    ActivityIndicator: false,
  };

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 90 },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: title,
  });

  componentDidMount() {
    var type = this.props.navigation.state.params.itemId;

    switch (type) {
      case "2":
        title = "Chính sách bảo mật";
        break;

      case "3":
        title = "Liên hệ";
        break;

      case "4":
        title = "Giới thiệu";
        break;

      default:
        title = "Điều khoản dịch vụ";
    }
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    var type = this.props.navigation.state.params.itemId;
    var text;

    switch (type) {
      case "2":
        text = (
          <Text>
            A. Mục đích và phạm vi thu thập{"\n"}
            {"\n"}
            Việc thu thập dữ liệu chủ yếu trên website của công ty chúng tôi bao
            gồm: họ tên, email, điện thoại, địa chỉ khách hàng trong mục liên
            hệ. Đây là các thông tin mà công ty chúng tôi cần thành viên cung
            cấp bắt buộc khi gửi thông tin đăng ký tài khoản hay muốn mua/sử
            dụng dịch vụ của Tojapan. Công ty chúng tôi thu thập các thông tin
            trên nhằm quản lý thông tin tài khoản khách hàng, liên hệ xác nhận
            lại với khách hàng trên website nhằm đảm bảo quyền lợi cho người
            tiêu dùng. Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu
            giữ mọi hoạt động sử dụng dịch vụ dưới thông tin mà mình cung cấp và
            hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông
            báo kịp thời cho webiste công ty chúng tôi về những hành vi sử dụng
            trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật
            khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
            {"\n"}
            {"\n"}B. Phạm vi sử dụng thông tin Công ty sử dụng thông tin thành
            viên cung cấp để: Liên hệ xác nhận đơn hàng và liên hệ giao hàng cho
            thành viên khi nhận được yêu cầu từ khách hàng; Cung cấp thông tin
            về sản phẩm đến khách hàng nếu có yêu cầu từ khách hàng; Gửi email
            tiếp thị, khuyến mại về hàng hóa do chúng tôi cung cấp; Gửi các
            thông báo về các hoạt động của website công ty chúng tôi; Liên lạc
            và giải quyết với người dùng trong những trường hợp đặc biệt; Không
            sử dụng thông tin cá nhân của người dùng ngoài mục đích xác nhận và
            liên hệ có liên quan đến giao dịch tại công ty chúng tôi; Khi có yêu
            cầu của cơ quan tư pháp bao gồm: Viện kiểm sát, Tòa án, cơ quan công
            an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách
            hàng.
            {"\n"}
            {"\n"}C. Thời gian lưu trữ thông tin Dữ liệu cá nhân của thành viên
            sẽ được lưu trữ cho đến khi có yêu cầu ban quản trị hủy bỏ hoặc có ý
            kiến hủy bỏ của khách hàng. Còn lại trong mọi trường hợp thông tin
            cá nhân thành viên sẽ được bảo mật trên máy chủ của công ty chúng
            tôi.
            {"\n"}
            {"\n"}D. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
            {"\n"}
            {"\n"}
            TOM Express 下高野543−36 2760021{"\n"}
            {"\n"}
            Email: sales@tomexpress.jp{"\n"}
            {"\n"}
            Hotline: 07021907979 - 0474065344{"\n"}
            {"\n"}
            E. Phương thức và công cụ để người dùng tiếp cận và chỉnh sửa dữ
            liệu cá nhân của mình. Thành viên có quyền tự kiểm tra, cập nhật,
            điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ
            với ban quản trị website công ty chúng tôi thực hiện việc này. Thành
            viên có quyền gửi khiếu nại về nội dung bảo mật thông tin đề nghị
            liên hệ Ban quản trị của website công ty chúng tôi. Khi tiếp nhận
            những phản hồi này, công ty chúng tôi sẽ xác nhận lại thông tin,
            trường hợp đúng như phản ánh của thành viên tùy theo mức độ, công ty
            chúng tôi sẽ có những biện pháp xử lý kịp thời.
            {"\n"}
            {"\n"}F. Cam kết bảo mật thông tin cá nhân khách hàng Thông tin cá
            nhân của thành viên trên công ty chúng tôi được công ty chúng tôi
            cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân
            của công ty chúng tôi. Việc thu thập và sử dụng thông tin của mỗi
            thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ
            những trường hợp pháp luật có quy định khác. Không sử dụng, không
            chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá
            nhân của thành viên khi không có sự cho phép đồng ý từ thành viên.
            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
            đến mất mát dữ liệu cá nhân thành viên, công ty chúng tôi sẽ có
            trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý
            kịp thời và thông báo cho thành viên được biết. Bảo mật tuyệt đối
            mọi thông tin giao dịch trực tuyến của thành viên bao gồm thông tin
            hóa đơn kế toán chứng từ số hóa trên công ty chúng tôi. Ban quản lý
            công ty chúng tôi yêu cầu các cá nhân khi đăng ký/mua hàng phải cung
            cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ
            liên lạc, email, điện thoại,…., và chịu trách nhiệm về tính pháp lý
            của những thông tin trên. Ban quản lý công ty chúng tôi không chịu
            trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến
            quyền lợi của thành viên đó nếu xét thấy tất cả thông tin cá nhân
            của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.
            {"\n"}
            {"\n"}G. Cơ chế tiếp nhận và giải quyết khiếu nại của khách hàng
            liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc
            phạm vi đã thông báo Chúng tôi cam kết sẽ đảm bảo an toàn cho thông
            tin cá nhân của quý khách hàng, tuyệt đối không mua bán, trao đổi
            thông tin khách hàng với bên thứ 3 vì mục đích thương mại. Trong
            trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất
            mát dữ liệu cá nhân khách hàng, chúng tôi sẽ có trách nhiệm thông
            báo ngay lập tức vụ việc cho cơ quan chức năng điều tra xử lý kịp
            thời và thông báo cho khách hàng được biết. Khi khách hàng có khiếu
            nại khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích
            hoặc phạm vi đã thông báo thì khách hàng có thể gửi khiếu nại và
            chứng cứ liên quan đến vụ việc qua số điện thoại của Công ty là
            {"\n"} Hotline: 07021907979 - 0474065344 - TOM Express 下高野543−36
            2760021
            {"\n"}Chúng tôi cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là
            trong vòng 05 ngày làm việc (trừ thứ 7 và chủ nhật) kể từ thời điểm
            nhận được thông tin. Bất kỳ tranh cãi, khiếu nại hoặc tranh chấp
            phát sinh từ hoặc liên quan đến giao dịch tại Tojapan hoặc các Quy
            định và Điều kiện này đều sẽ được giải quyết bằng hình thức thương
            lượng, hòa giải, trọng tài và/hoặc Tòa án theo Luật bảo vệ Người
            tiêu dùng.
          </Text>
        );
        break;

      case "3":
        text = (
          <Text>
            Trụ sở chính: TOM Express 下高野543−36 2760021{"\n"}
            {"\n"}
            Giờ làm việc: 7:00 - 20:00{"\n"}
            {"\n"}
            Email: sales@tomexpress.jp{"\n"}
            {"\n"}
            Hotline: 07021907979 - 0474065344{"\n"}
            {"\n"}
          </Text>
        );
        break;

      case "4":
        text = (
          <Text>
            Tojpan là công ty logistics hàng đầu trong lĩnh vực mua sắm/vận
            chuyển hàng hóa Việt - Nhật.Là đơn vị uy tín với trên 10 năm kinh
            nghiệm trên thị trường cung cấp dịch vụ đặt hàng order, vận chuyển
            hàng hóa từ các sàn thương mại điện tử lớn nhất Nhật Bản về Việt
            Nam.
            {"\n"}
            {"\n"}Chúng tôi luôn nỗ lực cống hiến, không ngừng học hỏi, đổi mới
            bằng thái độ tích cực, yêu thương để “tạo ra giải pháp đơn giản hóa
            mọi giao dịch thương mại trên toàn cầu!
            {"\n"}
            {"\n"}GIÁ TRỊ CỐT LÕI
            {"\n"}
            {"\n"}01 Cống Hiến Tạo Ra Thành Quả Chúng tôi luôn tin rằng, khi
            cống hiến hết mình tạo ra giá trị cho xã hội thì sẽ được đền đáp
            xứng đáng với những mà chúng tôi mang lại.
            {"\n"}
            {"\n"}02 Không Ngừng Học Hỏi Và Đổi Mới Chúng tôi luôn luôn trau dồi
            kỹ năng bản thân, chuyên môn và sáng tạo để mang lại những giải pháp
            tối ưu nhất. Không ngừng vươn tới sự hoàn hảo. Chúng tôi thừa nhận
            sai và can đảm thay đổi
            {"\n"}
            {"\n"}03 Thái Độ Tích Cực Tư duy tích cực, sẵn sàng đối mặt, tự tin
            đưa ra giải pháp cho mọi tình huống.
            {"\n"}
            {"\n"}04 Cam Kết Vì Mục Tiêu Luôn hành động theo tinh thần trách
            nhiệm, tuân thủ kỷ luật và dũng cảm để đạt được mục tiêu.
            {"\n"}
            {"\n"}05 Yêu Thương Và Hỗ Trợ Đồng Đội Luôn đoàn kết yêu thương tạo
            ra sức mạnh to lớn cho tập thể, hỗ trợ lẫn nhau trong công việc cũng
            như cuộc sống.
            {"\n"}
            {"\n"}06 Xây Dựng Và Duy Trì Các Mối Quan Hệ TDG xây dựng mối quan
            hệ với các khách hàng, đối tác bằng sự chuyên nghiệp, chân thành, và
            uy tín.
          </Text>
        );
        break;

      default:
        text = (
          <Text>
            1. Nguyên tắc chung{"\n"}
            {"\n"}
            Website ToJapan được vận hành bởi: CÔNG TY TOM EXPRESS{"\n"}
            {"\n"}
            Địa chỉ trụ sở: TOM Express 下高野543−36 2760021{"\n"}
            {"\n"}
            Tổng đài cskh: 07021907979 - 0474065344{"\n"}
            {"\n"}
            Email: sales@tomexpress.jp{"\n"}
            {"\n"}
            Các thông tin đăng tải trên website phải đáp ứng đầy đủ các quy định
            của pháp luật có liên quan. Không nằm trong các loại thông tin mà
            Nhà nước cấm. Mọi hoạt động trên website ToJapan.jp được thực hiện
            công khai, minh bạch và đảm bảo quyền lợi của người sử dụng Tất cả
            các nội dung trong quy định này phải tuân thủ theo hệ thống pháp
            luật hiện hành của Việt Nam. Thành viên khi tham gia vào website
            ToJapan.jp phải đọc rõ các thỏa thuận sử dụng, chính sách bảo mật
            của website ToJapan.jp cũng như phải tự tìm hiểu trách nhiệm pháp lý
            của mình đối với luật pháp hiện hành của Việt Nam và cam kết thực
            hiện đúng những nội dung trong các chính sách của website
            ToJapan.jp.
            {"\n"}
            {"\n"}
            2. Quy định chung{"\n"}
            {"\n"}
            Chủ sở hữu: CÔNG TY TOM Express{"\n"}
            {"\n"}
            Tên gọi chính của website: ToJapan.jp{"\n"}
            {"\n"}
            Tên viết tắt của website: ToJapan{"\n"}
            {"\n"}
            Tên miền chính của website: ToJapan.jp{"\n"}
            {"\n"}
            Tên miền phụ: Không có{"\n"}
            {"\n"}
            Định nghĩa chung: Khách hàng: là thương nhân, tổ chức, cá nhân có
            nhu cầu sử dụng dịch vụ trên website ToJapan.jp.
            {"\n"}
            {"\n"}
            3. Nghĩa vụ của người bán va nghĩa vụ của khách hàng trong mỗi giao
            dịch{"\n"}
            {"\n"}
            3.1 Nghĩa vụ của Bên Bán:{"\n"}
            {"\n"}
            Nghĩa vụ bảo đảm quyền sở hữu đối với hàng hoá Bên bán có nghĩa vụ
            bảo đảm: {"\n"}
            {"\n"}
            1) Quyền sở hữu của bên mua đối với hàng hóa đã bán không bị tranh
            chấp bởi bên thứ ba;{"\n"}
            {"\n"}
            2) Hàng hóa đó phải hợp pháp; {"\n"}
            {"\n"}
            3) Việc chuyển giao hàng hoá là hợp pháp. Nghĩa vụ bảo đảm quyền sở
            hữu trí tuệ đối với hàng hoá Bên bán có nghĩa vụ đảm bảo hàng hóa là
            đối tượng của hợp đồng không phải hàng hóa vi phạm quyền sở hữu trí
            tuệ và phải chịu trách nhiệm trong trường hợp có tranh chấp liên
            quan đến quyền sở hữu trí tuệ đối với hàng hóa đã bán trừ trường hợp
            hàng hóa được sản xuất, chế tạo, chế biến theo công thức, bản vẽ,
            thông số kỹ thuật chi tiết do bên mua cung cấp, trường hợp này bên
            mua phải chịu trách nhiệm nếu có khiếu nại khiếu kiện liên quan đến
            hàng hóa. Nghĩa vụ giao hàng đúng đối tượng của hợp đồng và chứng từ
            liên quan Bên bán có trách nhiệm giao hàng đúng theo thỏa thuận
            trong hợp đồng: bao gồm giao hàng đúng đối tượng hàng hóa, đúng số
            lượng, chất lượng, chủng loại, thông số kỹ thuật… đã được hai bên
            thỏa thuận. Bên cạnh việc giao hàng, bên bán còn phải giao chứng từ
            liên quan đến hàng hóa. Đó có thể là vận đơn, các thông tin về hàng
            hóa, quy cách đóng gói bảo quản, hướng dẫn sử dụng… Đây là nghĩa vụ
            bắt buộc trong cả trường hợp hai bên không có thỏa thuận. Đối với
            trường hợp giao hàng không đúng đối tượng được thỏa thuận, bên mua
            có quyền từ chối nhận hàng và yêu cầu bồi thường nếu có thiệt hại
            thực tế xảy ra. Nghĩa vụ giao hàng đúng thời gian và địa điểm đã
            thỏa thuận Bên bán có nghĩa vụ tôn trọng những thỏa thuận của hai
            bên về thời điểm cũng như địa điểm giao hàng. Trường hợp giao hàng
            trước thời hạn đã thỏa thuận, bên bán phải thông báo cho bên mua và
            bên mua có quyền từ chối nhận nếu các bên không có thỏa thuận khác.
            Nghĩa vụ chuyển giao quyền sở hữu hàng hóa{"\n"}
            {"\n"}
            Thời điểm chuyển quyền sở hữu hàng hóa được xác định như sau: trừ
            trường hợp pháp luật có quy định khác hoặc các bên có thỏa thuận
            khác, quyền sở hữu được chuyển từ bên bán sang bên mua kể từ thời
            điểm hàng hóa được chuyển giao.
            {"\n"}
            {"\n"}Trách nhiệm đối với hàng hóa không phù hợp với hợp đồng Hàng
            hóa không phù hợp với hợp đồng là hàng hóa thuộc các trường hợp sau:
            {"\n"}
            {"\n"}
            (i) Không phù hợp với mục đích sử dụng thông thường của các hàng hoá
            cùng chủng loại;{"\n"}
            {"\n"}
            (ii) Không phù hợp với bất kỳ mục đích cụ thể nào mà bên mua đã cho
            bên bán biết hoặc bên bán phải biết vào thời điểm giao kết hợp đồng;
            {"\n"}
            {"\n"}
            (iii) Không bảo đảm chất lượng như chất lượng của mẫu hàng hoá mà
            bên bán đã giao hoặc thỏa thuận với bên mua;{"\n"}
            {"\n"}
            (iv) Không được bảo quản, đóng gói theo cách thức thông thường đối
            với loại hàng hoá đó hoặc không theo cách thức thích hợp để bảo quản
            hàng hoá trong trường hợp không có cách thức bảo quản thông thường.
            Nghĩa vụ bảo hành hàng hóa Nghĩa vụ này được quy định trong Bộ Luật
            dân sự năm 2015 và Luật Thương mại 2005, Luật bảo vệ quyền lợi người
            tiêu dùng và một số văn bản khác. Tất cả các mặt hàng khách hàng mua
            từ Showroom đều được bảo hành theo Chính sách bảo hành cho từng mặt
            hàng cụ thể. Nghĩa vụ thông báo Trong Bộ luật dân sự năm 2015 và cả
            Luật Thương mại năm 2005 ngoài quy định về nghĩa vụ thông báo của
            bên bán trong trường hợp có khiếu nại về sự vi phạm quyền sở hữu trí
            tuệ đối với hàng hóa được sản xuất theo yêu cầu, công thức bên mua
            cung cấp, bên bán còn có nghĩa vụ thông báo với bên mua về sự kiện
            bất khả kháng xảy ra trong quá trình thực hiện hợp đồng. Theo đó,
            các bên thỏa thuận về việc thông báo đối với trường hợp sự kiện bất
            khả kháng ảnh hưởng đến việc thực hiện hợp đồng và hành vi khắc phục
            của các bên để ngăn ngừa thiệt hại cho cả hai bên.
            {"\n"}
            {"\n"}3.2 Nghĩa vụ của Bên Mua: Nghĩa vụ thanh toán Bên mua có nghĩa
            vụ thanh toán tiền mua hàng và nhận hàng theo thỏa thuận. Bên mua
            phải tuân thủ các phương thức thanh toán, thự c hiện việc thanh toán
            theo trình tự, thủ tục đã thỏa thuận và theo quy định của pháp luật.
            Bên mua vẫn phải thanh toán tiền mua hàng trong trường hợp hàng hoá
            mất mát, hư hỏng sau thời điểm rủi ro được chuyển từ bên bán sang
            bên mua, trừ trường hợp mất mát, hư hỏng do lỗi của bên bán gây ra.
            Nghĩa vụ nhận hàng Tương ứng với nghĩa vụ giao hàng của bên bán thì
            bên mua cũng có nghĩa vụ nhận hàng và thiện chí thực hiện các biện
            pháp để bên bán giao hàng đúng thời gian và địa điểm đã thỏa thuận
            hoặc theo quy định của pháp luật. Nghĩa vụ kiểm tra hàng hóa Bên mua
            phải kiểm tra hàng hóa hoặc bảo đảm đã có sự kiểm tra hàng hóa trong
            một thời hạn ngắn nhất mà thực tế có thể làm được tuỳ tình huống cụ
            thể. Nghĩa vụ thông báo Nếu không có thỏa thuận khác, bên mua có
            nghĩa vụ thông báo cho bên bán về việc khiếu nại, khiếu kiện của bên
            thứ ba liên quan đến vi phạm quyền sở hữu trí tuệ, hoặc sự kiện bất
            khả kháng ảnh hưởng đến quá trình thực hiện hợp đồng của hai bên.
            Nghĩa vụ đảm bảo quyền sở hữu trí tuệ của hàng hóa Bên mua có nghĩa
            vụ đảm bảo hàng hóa là đối tượng của hợp đồng không phải hàng hóa vi
            phạm quyền sở hữu trí tuệ trong trường hợp bên mua đặt hàng và yêu
            cầu bên bán sản xuất hàng hóa theo bản vẽ thiết kế, công thức cụ
            thể, chi tiết.
            {"\n"}
            {"\n"}4. Hướng dẫn sử dụng website Nghiêm cấm sử dụng bất kỳ phần
            nào của trang web này với mục đích thương mại nếu không được Công ty
            cổ phần quốc tế Thương Dô cho phép bằng văn bản. Nếu vi phạm bất cứ
            điều nào trong đây, chúng tôi không chịu bất kỳ trách nhiệm nào, dù
            trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra
            do quý khách không tuân thủ quy định.
            {"\n"}
            {"\n"}5. Thương hiệu và bản quyền Mọi quyền sở hữu trí tuệ (đã đăng
            ký hoặc chưa đăng ký), nội dung thông tin và tất cả các thiết kế,
            văn bản, đồ họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên
            dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài sản của Chúng
            tôi. Toàn bộ nội dung của trang web được bảo vệ bởi luật bản quyền
            của Việt Nam và các công ước quốc tế. Bản quyền đã được bảo lưu.
            {"\n"}
            {"\n"}6. Quyền pháp lý Các điều kiện, điều khoản và nội dung của
            trang web này được điều chỉnh bởi luật pháp Việt Nam và Tòa án có
            thẩm quyền tại Việt Nam sẽ giải quyết bất kỳ tranh chấp nào phát
            sinh từ việc sử dụng trái phép trang web này.
            {"\n"}
            {"\n"}7. Quy định về bảo mật Trang web của Chúng tôi coi trọng việc
            bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin
            và việc thanh toán của quý khách. Thông tin của quý khách trong quá
            trình thanh toán sẽ được mã hóa để đảm bảo an toàn. Sau khi quý
            khách hoàn thành quá trình đặt hàng, quý khách sẽ thoát khỏi chế độ
            an toàn. Quý khách không được sử dụng bất kỳ chương trình, công cụ
            hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi
            cấu trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán, truyền bá
            hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm
            nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị
            tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần
            thiết. Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường
            hợp cơ quan pháp luật yêu cầu, Chúng tôi sẽ buộc phải cung cấp những
            thông tin này cho các cơ quan pháp luật.
            {"\n"}
            {"\n"}8. Mục đích và phạm vi thu thập Việc thu thập dữ liệu chủ yếu
            trên website ToJapan.jp bao gồm: Email, điện thoại, tên khách hàng,
            địa chỉ khách hàng. Đây là các thông tin mà ToJapan.jp yêu cầu khách
            hàng cung cấp bắt buộc khi đăng ký sử dụng dịch vụ và để ToJapan.jp
            liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên website
            nhằm đảm bảo quyền lợi cho người tiêu dùng. Trong quá trình giao
            dịch thanh toán tại Website ToJapan.jp, Chúng tôi chỉ lưu giữ thông
            tin chi tiết về đơn hàng đã thanh toán của khách hàng. Chúng tôi
            cũng sẽ sử dụng cả thông tin nhận diện cá nhân của thành viên để gia
            tăng khả năng đáp ứng của Chúng tôi về nhu cầu của khách hàng cũng
            như về phát triển những chức năng, tính năng và các sản phẩm mới
            theo những xu hướng và sở thích đang diễn tiến.
          </Text>
        );
    }
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Background>
          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginHeader,
              { paddingBottom: 30 },
            ]}
          >
            <Text>{text}</Text>
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default News;
