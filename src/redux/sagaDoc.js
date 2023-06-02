//! redux saga là gì?
//* là một thư viện middleware trong Redux.generator function

//! Effect:
//* là một javascript Object(chứa type và payload)

//! Effect Creator:
//* là những Factory Function được cung cấp bởi Redux Saga, nó sẽ trả về 1 Effect(trả về một object)

//! Blocking và Non-blocking
//* Blocking: Khi nhận Effect Creator thì sẽ dừng lại cho đến khi action liên qua đến Effect Creator chạy xong thì mới tiếp tục thực thi những thằng ở phía dưới
//* Non-blocking: Sẽ chạy ngay lập tức

//! Watcher và Worker
//* Watcher: là một saga sẽ theo dỗi tất cả những action được gửi đến middleware và sẽ thông báo cho Worker thực hiện tác vụ tương ứng
//* => Worker: là một Saga sẽ thực thi các hành động bên trong nó mỗi khi nhận được thông báo từ Watcher

//! Effect creator thường gặp:
//* takeEvery: chạy saga với mỗi lần action dispatch ()
//* takeLatest: chạy saga với lần action dispatch cuối cùng( ví dụ dispatch lên 5 lần nó chỉ chạy thằng thứ 5)
//* takeLeading: chạy saga với mỗi lần action díspatch, nhưng những lần tiếp theo sẽ bị hủy cho đến khi chạy xong (ví dụ dispatch lên 3 lần lần thứ 1 chạy trong 2s trong 2s đó nếu dispatch lên lần thứ 2 3 thì nó sẽ bị hủy)
//* put: dispatch một action từ saga đến reducer
//* take: nó sẽ hoạt động theo watcher và worker ( lắng nghe action thực thi theo hành động tương ứng)
//* call: gọi function(generator function) trong redux Saga(Blocking khi gọi function trong redux saga những thằng phía sau phải dừng lại đợi cho function chạy xong thì chạy tiếp những thằng phía sau )
//* fork: để gọi một generator function, nó chạy độc lập.(Non-blocking khi gọi tới thì nó chạy độc lập không ảnh hưởng tới những thằng khác nên nó sẽ chạy ngay lập tức)
//* throttele: đảm bảo chỉ chạy sage trong 1 khoảng thời gian và chỉ chạy 1 lần.(ví dụ set 2s trong khoảng 2s đó dù mình dispatch lên 5 lần thì nó chỉ chạy 1 lần trong khoảng 2s đó  )
//* debounce: nó sẽ đợi trong khoảng thởi gian gọi(set thời gian đợi 2s, nếu lần cuối cùng mình không dispatch nữa trong khoảng 2s lúc này nó sẽ thực thi )
