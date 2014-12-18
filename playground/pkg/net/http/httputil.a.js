g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   �����net/http/httputil��Ypackage httputil
import bufio "bufio"
import bytes "bytes"
import errors "errors"
import fmt "fmt"
import io "io"
import ioutil "io/ioutil"
import net "net"
import http "net/http"
import url "net/url"
import strings "strings"
import time "time"
import internal "net/http/internal"
import textproto "net/textproto"
import sync "sync"
import log "log"
type @"".ClientConn struct { @"".lk @"sync".Mutex; @"".c @"net".Conn; @"".r *@"bufio".Reader; @"".re error; @"".we error; @"".lastbody @"io".ReadCloser; @"".nread int; @"".nwritten int; @"".pipereq map[*@"net/http".Request]uint; @"".pipe @"net/textproto".Pipeline; @"".writeReq func (? *@"net/http".Request, ? @"io".Writer) (? error) }
func (? *@"".ClientConn) @"".Close() (? error)
func (? *@"".ClientConn) @"".Do(@"".req *@"net/http".Request) (@"".resp *@"net/http".Response, @"".err error)
func (? *@"".ClientConn) @"".Hijack() (@"".c @"net".Conn, @"".r *@"bufio".Reader)
func (? *@"".ClientConn) @"".Pending() (? int)
func (? *@"".ClientConn) @"".Read(@"".req *@"net/http".Request) (@"".resp *@"net/http".Response, @"".err error)
func (? *@"".ClientConn) @"".Write(@"".req *@"net/http".Request) (@"".err error)
func @"".DumpRequest(@"".req *@"net/http".Request, @"".body bool) (@"".dump []byte, @"".err error)
func @"".DumpRequestOut(@"".req *@"net/http".Request, @"".body bool) (? []byte, ? error)
func @"".DumpResponse(@"".resp *@"net/http".Response, @"".body bool) (@"".dump []byte, @"".err error)
var @"".ErrClosed *@"net/http".ProtocolError
var @"".ErrLineTooLong error
var @"".ErrPersistEOF *@"net/http".ProtocolError
var @"".ErrPipeline *@"net/http".ProtocolError
func @"".NewChunkedReader(@"".r @"io".Reader) (? @"io".Reader)
func @"".NewChunkedWriter(@"".w @"io".Writer) (? @"io".WriteCloser)
func @"".NewClientConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ClientConn)
func @"".NewProxyClientConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ClientConn)
func @"".NewServerConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ServerConn)
func @"".NewSingleHostReverseProxy(@"".target *@"net/url".URL) (? *@"".ReverseProxy)
type @"".ReverseProxy struct { @"".Director func (? *@"net/http".Request) (); @"".Transport @"net/http".RoundTripper; @"".FlushInterval @"time".Duration; @"".ErrorLog *@"log".Logger }
func (? *@"".ReverseProxy) @"".ServeHTTP(@"".rw @"net/http".ResponseWriter, @"".req *@"net/http".Request) ()
func (? *@"".ReverseProxy) @"".copyResponse(@"".dst @"io".Writer, @"".src @"io".Reader) ()
func (? *@"".ReverseProxy) @"".logf(@"".format string, @"".args ...interface {  }) ()
type @"".ServerConn struct { @"".lk @"sync".Mutex; @"".c @"net".Conn; @"".r *@"bufio".Reader; @"".re error; @"".we error; @"".lastbody @"io".ReadCloser; @"".nread int; @"".nwritten int; @"".pipereq map[*@"net/http".Request]uint; @"".pipe @"net/textproto".Pipeline }
func (? *@"".ServerConn) @"".Close() (? error)
func (? *@"".ServerConn) @"".Hijack() (@"".c @"net".Conn, @"".r *@"bufio".Reader)
func (? *@"".ServerConn) @"".Pending() (? int)
func (? *@"".ServerConn) @"".Read() (@"".req *@"net/http".Request, @"".err error)
func (? *@"".ServerConn) @"".Write(@"".req *@"net/http".Request, @"".resp *@"net/http".Response) (? error)
type @"".delegateReader struct { @"".c chan @"io".Reader; @"".r @"io".Reader }
func (? *@"".delegateReader) @"".Read(@"".p []byte) (? int, ? error)
type @"".dumpConn struct { ? @"io".Writer; ? @"io".Reader }
func (? *@"".dumpConn) @"".Close() (? error)
func (? *@"".dumpConn) @"".LocalAddr() (? @"net".Addr)
func (? *@"".dumpConn) @"".RemoteAddr() (? @"net".Addr)
func (? *@"".dumpConn) @"".SetDeadline(@"".t @"time".Time) (? error)
func (? *@"".dumpConn) @"".SetReadDeadline(@"".t @"time".Time) (? error)
func (? *@"".dumpConn) @"".SetWriteDeadline(@"".t @"time".Time) (? error)
type @"".failureToReadBody struct {  }
func (? @"".failureToReadBody) @"".Close() (? error)
func (? @"".failureToReadBody) @"".Read(? []byte) (? int, ? error)
func (? *@"".failureToReadBody) @"".Close() (? error)
func (? *@"".failureToReadBody) @"".Read(? []byte) (? int, ? error)
type @"".maxLatencyWriter struct { @"".dst @"".writeFlusher; @"".latency @"time".Duration; @"".lk @"sync".Mutex; @"".done chan bool }
func (? *@"".maxLatencyWriter) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".maxLatencyWriter) @"".flushLoop() ()
func (? *@"".maxLatencyWriter) @"".stop() ()
type @"".neverEnding byte
func (? @"".neverEnding) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".neverEnding) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".writeFlusher interface { @"net/http".Flush() (); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"bufio".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"bufio".p []byte) (@"bufio".n int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"bufio".c byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"bufio".line []byte, @"bufio".isPrefix bool, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"bufio".r rune, @"bufio".size int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"bufio".delim byte) (@"bufio".line string, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"bufio".w @"io".Writer) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"bufio".buf []byte, @"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"bufio".w @"io".Writer) (? int64, ? error)
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
import multipart "mime/multipart"
import tls "crypto/tls"
type @"net/http".Request struct { @"net/http".Method string; @"net/http".URL *@"net/url".URL; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Host string; @"net/http".Form @"net/url".Values; @"net/http".PostForm @"net/url".Values; @"net/http".MultipartForm *@"mime/multipart".Form; @"net/http".Trailer @"net/http".Header; @"net/http".RemoteAddr string; @"net/http".RequestURI string; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Request) @"net/http".AddCookie(@"net/http".c *@"net/http".Cookie) ()
func (? *@"net/http".Request) @"net/http".BasicAuth() (@"net/http".username string, @"net/http".password string, @"net/http".ok bool)
func (? *@"net/http".Request) @"net/http".Cookie(@"net/http".name string) (? *@"net/http".Cookie, ? error)
func (? *@"net/http".Request) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Request) @"net/http".FormFile(@"net/http".key string) (? @"mime/multipart".File, ? *@"mime/multipart".FileHeader, ? error)
func (? *@"net/http".Request) @"net/http".FormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".MultipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".ParseForm() (? error)
func (? *@"net/http".Request) @"net/http".ParseMultipartForm(@"net/http".maxMemory int64) (? error)
func (? *@"net/http".Request) @"net/http".PostFormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Request) @"net/http".Referer() (? string)
func (? *@"net/http".Request) @"net/http".SetBasicAuth(@"net/http".username string, @"net/http".password string) ()
func (? *@"net/http".Request) @"net/http".UserAgent() (? string)
func (? *@"net/http".Request) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".WriteProxy(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".closeBody() ()
func (? *@"net/http".Request) @"net/http".expectsContinue() (? bool)
func (? *@"net/http".Request) @"net/http".multipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".wantsClose() (? bool)
func (? *@"net/http".Request) @"net/http".wantsHttp10KeepAlive() (? bool)
func (? *@"net/http".Request) @"net/http".write(@"net/http".w @"io".Writer, @"net/http".usingProxy bool, @"net/http".extraHeaders @"net/http".Header) (? error)
type @"net/textproto".Pipeline struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".request @"net/textproto".sequencer; @"net/textproto".response @"net/textproto".sequencer }
func (? *@"net/textproto".Pipeline) @"net/textproto".EndRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".EndResponse(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".Next() (? uint)
func (? *@"net/textproto".Pipeline) @"net/textproto".StartRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".StartResponse(@"net/textproto".id uint) ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net/http".Response struct { @"net/http".Status string; @"net/http".StatusCode int; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Trailer @"net/http".Header; @"net/http".Request *@"net/http".Request; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Response) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Response) @"net/http".Location() (? *@"net/url".URL, ? error)
func (? *@"net/http".Response) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Response) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
type @"net/http".ProtocolError struct { @"net/http".ErrorString string }
func (? *@"net/http".ProtocolError) @"net/http".Error() (? string)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"net/url".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"net/url".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/http".RoundTripper interface { @"net/http".RoundTrip(? *@"net/http".Request) (? *@"net/http".Response, ? error) }
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"log".Logger struct { @"log".mu @"sync".Mutex; @"log".prefix string; @"log".flag int; @"log".out @"io".Writer; @"log".buf []byte }
func (? *@"log".Logger) @"log".Fatal(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalf(@"log".format string, @"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalln(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Flags() (? int)
func (? *@"log".Logger) @"log".Output(@"log".calldepth int, @"log".s string) (? error)
func (? *@"log".Logger) @"log".Panic(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicf(@"log".format string, @"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicln(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Prefix() (? string)
func (? *@"log".Logger) @"log".Print(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Printf(@"log".format string, @"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Println(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".SetFlags(@"log".flag int) ()
func (? *@"log".Logger) @"log".SetPrefix(@"log".prefix string) ()
func (? *@"log".Logger) @"log".formatHeader(@"log".buf *[]byte, @"log".t @"time".Time, @"log".file string, @"log".line int) ()
type @"net/http".ResponseWriter interface { @"net/http".Header() (? @"net/http".Header); @"net/http".Write(? []byte) (? int, ? error); @"net/http".WriteHeader(? int) () }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"net/http".Header map[string][]string
func (? @"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? @"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? @"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? @"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? @"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
func (? *@"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? *@"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? *@"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? *@"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
type @"mime/multipart".Form struct { @"mime/multipart".Value map[string][]string; @"mime/multipart".File map[string][]*@"mime/multipart".FileHeader }
func (? *@"mime/multipart".Form) @"mime/multipart".RemoveAll() (? error)
import x509 "crypto/x509"
type @"crypto/tls".ConnectionState struct { @"crypto/tls".Version uint16; @"crypto/tls".HandshakeComplete bool; @"crypto/tls".DidResume bool; @"crypto/tls".CipherSuite uint16; @"crypto/tls".NegotiatedProtocol string; @"crypto/tls".NegotiatedProtocolIsMutual bool; @"crypto/tls".ServerName string; @"crypto/tls".PeerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".VerifiedChains [][]*@"crypto/x509".Certificate; @"crypto/tls".TLSUnique []byte }
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
type @"mime/multipart".File interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadAt(@"io".p []byte, @"io".off int64) (@"io".n int, @"io".err error); @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error) }
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
type @"net/textproto".sequencer struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".wait map[uint]chan uint }
func (? *@"net/textproto".sequencer) @"net/textproto".End(@"net/textproto".id uint) ()
func (? *@"net/textproto".sequencer) @"net/textproto".Start(@"net/textproto".id uint) ()
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"net/http".keyValues struct { @"net/http".key string; @"net/http".values []string }
type @"net/http".headerSorter struct { @"net/http".kvs []@"net/http".keyValues }
func (? *@"net/http".headerSorter) @"net/http".Len() (? int)
func (? *@"net/http".headerSorter) @"net/http".Less(@"net/http".i int, @"net/http".j int) (? bool)
func (? *@"net/http".headerSorter) @"net/http".Swap(@"net/http".i int, @"net/http".j int) ()
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".MaxPathLenZero bool; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"bytes".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"bytes".c byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"bytes".r @"io".Reader) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"bytes".r rune, @"bytes".size int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"bytes".delim byte) (@"bytes".line string, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"bytes".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"bytes".r rune) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"bytes".s string) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"bytes".w @"io".Writer) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"bytes".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time "asn1:\"optional\""; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"bytes".readOp int
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
bufioA bytesB errorsC fmtD ioE 	io/ioutilF netG net/httpH net/urlI stringsJ timeK net/http/internalL net/textprotoM syncN logO T@    $r=A.$init(true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} @    $r=B.$init(true);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} @    $r=C.$init(true);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} @    $r=D.$init(true);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} @    $r=E.$init(true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} @    $r=F.$init(true);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} @    $r=O.$init(true);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} @    $r=G.$init(true);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} @    $r=H.$init(true);$s=9;case 9:if($r&&$r.$blocking){$r=$r();} B    $r=L.$init(true);$s=10;case 10:if($r&&$r.$blocking){$r=$r();} B    $r=M.$init(true);$s=11;case 11:if($r&&$r.$blocking){$r=$r();} B    $r=I.$init(true);$s=12;case 12:if($r&&$r.$blocking){$r=$r();} B    $r=J.$init(true);$s=13;case 13:if($r&&$r.$blocking){$r=$r();} B    $r=N.$init(true);$s=14;case 14:if($r&&$r.$blocking){$r=$r();} B    $r=K.$init(true);$s=15;case 15:if($r&&$r.$blocking){$r=$r();} Q��Q=$pkg.dumpConn=$newType(0,$kindStruct,"httputil.dumpConn","dumpConn","net/http/httputil",function(Writer_,Reader_){this.$val=this;this.Writer=Writer_!==undefined?Writer_:$ifaceNil;this.Reader=Reader_!==undefined?Reader_:$ifaceNil;});�0Q.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];($ptrType(Q)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["LocalAddr","LocalAddr","",$funcType([],[G.Addr],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),1],["RemoteAddr","RemoteAddr","",$funcType([],[G.Addr],false),-1],["SetDeadline","SetDeadline","",$funcType([K.Time],[$error],false),-1],["SetReadDeadline","SetReadDeadline","",$funcType([K.Time],[$error],false),-1],["SetWriteDeadline","SetWriteDeadline","",$funcType([K.Time],[$error],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];Q.init([["Writer","","",E.Writer,""],["Reader","","",E.Reader,""]]);dumpConn	io:Reader	io:Writernet:Addr	time:Time RhR=$pkg.neverEnding=$newType(1,$kindUint8,"httputil.neverEnding","neverEnding","net/http/httputil",null);��R.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];($ptrType(R)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];neverEnding T��T=$pkg.delegateReader=$newType(0,$kindStruct,"httputil.delegateReader","delegateReader","net/http/httputil",function(c_,r_){this.$val=this;this.c=c_!==undefined?c_:($chanType(E.Reader,false,false)).nil;this.r=r_!==undefined?r_:$ifaceNil;});��($ptrType(T)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];T.init([["c","c","net/http/httputil",($chanType(E.Reader,false,false)),""],["r","r","net/http/httputil",E.Reader,""]]);delegateReader	io:Reader Z��Z=$pkg.failureToReadBody=$newType(0,$kindStruct,"httputil.failureToReadBody","failureToReadBody","net/http/httputil",function(){this.$val=this;});�1Z.methods=[["Close","Close","",$funcType([],[$error],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];($ptrType(Z)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];Z.init([]);failureToReadBody AF�AF=$pkg.ServerConn=$newType(0,$kindStruct,"httputil.ServerConn","ServerConn","net/http/httputil",function(lk_,c_,r_,re_,we_,lastbody_,nread_,nwritten_,pipereq_,pipe_){this.$val=this;this.lk=lk_!==undefined?lk_:new N.Mutex.Ptr();this.c=c_!==undefined?c_:$ifaceNil;this.r=r_!==undefined?r_:($ptrType(A.Reader)).nil;this.re=re_!==undefined?re_:$ifaceNil;this.we=we_!==undefined?we_:$ifaceNil;this.lastbody=lastbody_!==undefined?lastbody_:$ifaceNil;this.nread=nread_!==undefined?nread_:0;this.nwritten=nwritten_!==undefined?nwritten_:0;this.pipereq=pipereq_!==undefined?pipereq_:false;this.pipe=pipe_!==undefined?pipe_:new M.Pipeline.Ptr();});��($ptrType(AF)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Hijack","Hijack","",$funcType([],[G.Conn,($ptrType(A.Reader))],false),-1],["Pending","Pending","",$funcType([],[$Int],false),-1],["Read","Read","",$funcType([],[($ptrType(H.Request)),$error],false),-1],["Write","Write","",$funcType([($ptrType(H.Request)),($ptrType(H.Response))],[$error],false),-1]];AF.init([["lk","lk","net/http/httputil",N.Mutex,""],["c","c","net/http/httputil",G.Conn,""],["r","r","net/http/httputil",($ptrType(A.Reader)),""],["re","re","net/http/httputil",$error,""],["we","we","net/http/httputil",$error,""],["lastbody","lastbody","net/http/httputil",E.ReadCloser,""],["nread","nread","net/http/httputil",$Int,""],["nwritten","nwritten","net/http/httputil",$Int,""],["pipereq","pipereq","net/http/httputil",($mapType(($ptrType(H.Request)),$Uint)),""],["pipe","pipe","net/http/httputil",M.Pipeline,""]]);
ServerConnbufio:Readerio:ReadClosernet/http:Requestnet/http:Responsenet/textproto:Pipelinenet:Conn
sync:Mutex AH��AH=$pkg.ClientConn=$newType(0,$kindStruct,"httputil.ClientConn","ClientConn","net/http/httputil",function(lk_,c_,r_,re_,we_,lastbody_,nread_,nwritten_,pipereq_,pipe_,writeReq_){this.$val=this;this.lk=lk_!==undefined?lk_:new N.Mutex.Ptr();this.c=c_!==undefined?c_:$ifaceNil;this.r=r_!==undefined?r_:($ptrType(A.Reader)).nil;this.re=re_!==undefined?re_:$ifaceNil;this.we=we_!==undefined?we_:$ifaceNil;this.lastbody=lastbody_!==undefined?lastbody_:$ifaceNil;this.nread=nread_!==undefined?nread_:0;this.nwritten=nwritten_!==undefined?nwritten_:0;this.pipereq=pipereq_!==undefined?pipereq_:false;this.pipe=pipe_!==undefined?pipe_:new M.Pipeline.Ptr();this.writeReq=writeReq_!==undefined?writeReq_:$throwNilPointerError;});�N($ptrType(AH)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Do","Do","",$funcType([($ptrType(H.Request))],[($ptrType(H.Response)),$error],false),-1],["Hijack","Hijack","",$funcType([],[G.Conn,($ptrType(A.Reader))],false),-1],["Pending","Pending","",$funcType([],[$Int],false),-1],["Read","Read","",$funcType([($ptrType(H.Request))],[($ptrType(H.Response)),$error],false),-1],["Write","Write","",$funcType([($ptrType(H.Request))],[$error],false),-1]];AH.init([["lk","lk","net/http/httputil",N.Mutex,""],["c","c","net/http/httputil",G.Conn,""],["r","r","net/http/httputil",($ptrType(A.Reader)),""],["re","re","net/http/httputil",$error,""],["we","we","net/http/httputil",$error,""],["lastbody","lastbody","net/http/httputil",E.ReadCloser,""],["nread","nread","net/http/httputil",$Int,""],["nwritten","nwritten","net/http/httputil",$Int,""],["pipereq","pipereq","net/http/httputil",($mapType(($ptrType(H.Request)),$Uint)),""],["pipe","pipe","net/http/httputil",M.Pipeline,""],["writeReq","writeReq","net/http/httputil",($funcType([($ptrType(H.Request)),E.Writer],[$error],false)),""]]);
ClientConnbufio:Readerio:ReadCloser	io:Writernet/http:Requestnet/http:Responsenet/textproto:Pipelinenet:Conn
sync:Mutex AL��AL=$pkg.ReverseProxy=$newType(0,$kindStruct,"httputil.ReverseProxy","ReverseProxy","net/http/httputil",function(Director_,Transport_,FlushInterval_,ErrorLog_){this.$val=this;this.Director=Director_!==undefined?Director_:$throwNilPointerError;this.Transport=Transport_!==undefined?Transport_:$ifaceNil;this.FlushInterval=FlushInterval_!==undefined?FlushInterval_:new K.Duration(0,0);this.ErrorLog=ErrorLog_!==undefined?ErrorLog_:($ptrType(O.Logger)).nil;});�#($ptrType(AL)).methods=[["ServeHTTP","ServeHTTP","",$funcType([H.ResponseWriter,($ptrType(H.Request))],[],false),-1],["copyResponse","copyResponse","net/http/httputil",$funcType([E.Writer,E.Reader],[],false),-1],["logf","logf","net/http/httputil",$funcType([$String,($sliceType($emptyInterface))],[],true),-1]];AL.init([["Director","Director","",($funcType([($ptrType(H.Request))],[],false)),""],["Transport","Transport","",H.RoundTripper,""],["FlushInterval","FlushInterval","",K.Duration,""],["ErrorLog","ErrorLog","",($ptrType(O.Logger)),""]]);ReverseProxy	io:Reader	io:Writer
log:Loggernet/http:Requestnet/http:ResponseWriternet/http:RoundTrippertime:Duration AQpAQ=$pkg.writeFlusher=$newType(8,$kindInterface,"httputil.writeFlusher","writeFlusher","net/http/httputil",null);��AQ.init([["Flush","Flush","",$funcType([],[],false)],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false)]]);writeFlusher AR��AR=$pkg.maxLatencyWriter=$newType(0,$kindStruct,"httputil.maxLatencyWriter","maxLatencyWriter","net/http/httputil",function(dst_,latency_,lk_,done_){this.$val=this;this.dst=dst_!==undefined?dst_:$ifaceNil;this.latency=latency_!==undefined?latency_:new K.Duration(0,0);this.lk=lk_!==undefined?lk_:new N.Mutex.Ptr();this.done=done_!==undefined?done_:($chanType($Bool,false,false)).nil;});��($ptrType(AR)).methods=[["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["flushLoop","flushLoop","net/http/httputil",$funcType([],[],false),-1],["stop","stop","net/http/httputil",$funcType([],[],false),-1]];AR.init([["dst","dst","net/http/httputil",AQ,""],["latency","latency","net/http/httputil",K.Duration,""],["lk","lk","net/http/httputil",N.Mutex,""],["done","done","net/http/httputil",($chanType($Bool,false,false)),""]]);maxLatencyWriternet/http/httputil:writeFlusher
sync:Mutextime:Duration VreqWriteExcludeHeaderDump Y	errNoBody AA	emptyBody ErrLineTooLong ErrPersistEOF 	ErrClosed ErrPipeline AE	errClosed AKAK=$throwNilPointerError;onExitFlushLoop!net/http/httputil:onExitFlushLoop AP
hopHeaders ab��    V=(a=new $Map(),b="Host",a[b]={k:b,v:true},b="Content-Length",a[b]={k:b,v:true},b="Transfer-Encoding",a[b]={k:b,v:true},b="Trailer",a[b]={k:b,v:true},a);reqWriteExcludeHeaderDump+net/http/httputil:reqWriteExcludeHeaderDump %    Y=C.New("sentinel error value");
errors:Newnet/http/httputil:errNoBody %    AA=F.NopCloser(J.NewReader(""));io/ioutil:NopClosernet/http/httputil:emptyBodystrings:NewReader *    $pkg.ErrLineTooLong=L.ErrLineTooLong;ErrLineTooLong net/http/httputil:ErrLineTooLong net/http/internal:ErrLineTooLong P    $pkg.ErrPersistEOF=new H.ProtocolError.Ptr("persistent connection closed");ErrPersistEOFnet/http/httputil:ErrPersistEOFnet/http:ProtocolError I    $pkg.ErrClosed=new H.ProtocolError.Ptr("connection closed by user");	ErrClosednet/http/httputil:ErrClosednet/http:ProtocolError @    $pkg.ErrPipeline=new H.ProtocolError.Ptr("pipeline error");ErrPipelinenet/http/httputil:ErrPipelinenet/http:ProtocolError 4    AE=C.New("i/o operation on closed connection");
errors:Newnet/http/httputil:errClosed ��    AP=new($sliceType($String))(["Connection","Keep-Alive","Proxy-Authenticate","Proxy-Authorization","Te","Trailers","Transfer-Encoding","Upgrade"]);
hopHeadersnet/http/httputil:hopHeaders net/http/httputil.drainBodyP�P=function(c){var d=$ifaceNil,e=$ifaceNil,f=$ifaceNil,g,h,i,j,k,l,m,n,o,p,q;  c  gg=new B.Buffer.Ptr();$copy(g,new B.Buffer.Ptr(),B.Buffer);  y  |h=g.ReadFrom(c);f=h[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �    i=$ifaceNil;j=$ifaceNil;k=f;d=i;e=j;f=k;return[d,e,f];    }  �  �f=c.Close();    if(!($interfaceIsEqual(f,$ifaceNil))){  �    l=$ifaceNil;m=$ifaceNil;n=f;d=l;e=m;f=n;return[d,e,f];    }  �    o=F.NopCloser(g);p=F.NopCloser(B.NewReader(g.Bytes()));q=$ifaceNil;d=o;e=p;f=q;return[d,e,f];    };	drainBodybytes:Bufferbytes:NewReaderio/ioutil:NopCloser #(*net/http/httputil.dumpConn).Close��Q.Ptr.prototype.Close=function(){var c;  �c=this;   return $ifaceNil;    };Q.prototype.Close=function(){return this.$val.Close();};dumpConnnet/http/httputil:dumpConn '(*net/http/httputil.dumpConn).LocalAddr��Q.Ptr.prototype.LocalAddr=function(){var c;  c=this;  Freturn $ifaceNil;    };Q.prototype.LocalAddr=function(){return this.$val.LocalAddr();};dumpConnnet/http/httputil:dumpConn ((*net/http/httputil.dumpConn).RemoteAddr��Q.Ptr.prototype.RemoteAddr=function(){var c;  Yc=this;  �return $ifaceNil;    };Q.prototype.RemoteAddr=function(){return this.$val.RemoteAddr();};dumpConnnet/http/httputil:dumpConn )(*net/http/httputil.dumpConn).SetDeadline��Q.Ptr.prototype.SetDeadline=function(c){var d;  �d=this;  �return $ifaceNil;    };Q.prototype.SetDeadline=function(c){return this.$val.SetDeadline(c);};dumpConnnet/http/httputil:dumpConn -(*net/http/httputil.dumpConn).SetReadDeadline��Q.Ptr.prototype.SetReadDeadline=function(c){var d;  �d=this;  return $ifaceNil;    };Q.prototype.SetReadDeadline=function(c){return this.$val.SetReadDeadline(c);};dumpConnnet/http/httputil:dumpConn .(*net/http/httputil.dumpConn).SetWriteDeadline��Q.Ptr.prototype.SetWriteDeadline=function(c){var d;  +d=this;  ^return $ifaceNil;    };Q.prototype.SetWriteDeadline=function(c){return this.$val.SetWriteDeadline(c);};dumpConnnet/http/httputil:dumpConn $(net/http/httputil.neverEnding).Read��R.prototype.Read=function(c){var d=0,e=$ifaceNil,f,g,h,i,j,k;  �f=this.$val!==undefined?this.$val:this;  �g=c;h=0;while(h<g.$length){i=h;  �(i<0||i>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+i]=(f<<24>>>24);    h++;}  �    j=c.$length;k=$ifaceNil;d=j;e=k;return[d,e];    };$ptrType(R).prototype.Read=function(c){return new R(this.$get()).Read(c);};neverEndingnet/http/httputil:neverEnding  net/http/httputil.DumpRequestOutS�
S=$pkg.DumpRequestOut=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  �e=c.Body;  �f=false;  �    if(!d||$interfaceIsEqual(c.Body,$ifaceNil)){  c.Body=$ifaceNil;      if(!((g=c.ContentLength,(g.$high===0&&g.$low===0)))){  2c.Body=F.NopCloser(E.LimitReader(new R(120),c.ContentLength));  �f=true;    }    }else{  �  �h=$ifaceNil;  �i=P(c.Body);e=i[0];c.Body=i[1];h=i[2];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[($sliceType($Uint8)).nil,h];    }    }  	j=c;  	    if(c.URL.Scheme==="https"){  	?j=new H.Request.Ptr();  	]$copy(j,c,H.Request);  	oj.URL=new I.URL.Ptr();  	�$copy(j.URL,c.URL,I.URL);  	�j.URL.Scheme="http";    }  
�  
�k=new B.Buffer.Ptr();$copy(k,new B.Buffer.Ptr(),B.Buffer);   l=E.Pipe();m=l[0];n=l[1];  $deferred.push([$methodVal(m,"Close"),[true]]);  '$deferred.push([$methodVal(n,"Close"),[true]]);  9o=new T.Ptr(new($chanType(E.Reader,false,false))(0),$ifaceNil);  �$go((function($b){var $this=this,$args=arguments,$r,$s=0,p,q,r;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �p=H.ReadRequest(A.NewReader(m));q=p[0];r=p[1];  �    if($interfaceIsEqual(r,$ifaceNil)){  KE.Copy(F.Discard,q.Body);  pq.Body.Close();    }  �    $r=$send(o.c,J.NewReader("HTTP/1.1 204 No Content\r\n\r\n"),true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[]);  �p=new H.Transport.Ptr(new N.Mutex.Ptr(),false,false,false,new N.Mutex.Ptr(),false,new N.RWMutex.Ptr(),false,$throwNilPointerError,(function(p,q){  2return[new Q.Ptr(E.MultiWriter(new($sliceType(E.Writer))([k,n])),o),$ifaceNil];    }),$throwNilPointerError,($ptrType($packages["crypto/tls"].Config)).nil,new K.Duration(0,0),true,false,0,new K.Duration(0,0));  pr=p.RoundTrip(j,true);$s=1;case 1:if(r&&r.$blocking){r=r();}q=r;s=q[1];  �c.Body=e;  �    if(!($interfaceIsEqual(s,$ifaceNil))){  �return[($sliceType($Uint8)).nil,s];    }  �t=k.Bytes();  �    if(f){    u=B.Index(t,new($sliceType($Uint8))($stringToBytes("\r\n\r\n")));    if(u>=0){  Gt=$subslice(t,0,(u+4>>0));    }    }  areturn[t,$ifaceNil];    case-1:}return;}}catch(err){$err=err;return[($sliceType($Uint8)).nil,$ifaceNil];}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};DumpRequestOutbufio:NewReaderbytes:Bufferbytes:Indexcrypto/tls:Configio/ioutil:Discardio/ioutil:NopCloserio:Copyio:LimitReaderio:MultiWriterio:Pipe	io:Reader	io:Writer net/http/httputil:delegateReadernet/http/httputil:drainBodynet/http/httputil:dumpConnnet/http/httputil:neverEndingnet/http:ReadRequestnet/http:Requestnet/http:Transportnet/url:URLstrings:NewReader
sync:Mutexsync:RWMutextime:Duration ((*net/http/httputil.delegateReader).Read��T.Ptr.prototype.Read=function(c,$b){var $this=this,$args=arguments,$r,$s=0,d,e;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  8d=$this;  j    if($interfaceIsEqual(d.r,$ifaceNil)){}else{$s=1;continue;}  |e=$recv(d.c,true);$s=2;case 2:if(e&&e.$blocking){e=e();}d.r=e[0];    case 1:  �return d.r.Read(c);    case-1:}return;}};$f.$blocking=true;return $f;};T.prototype.Read=function(c,$b){return this.$val.Read(c,$b);};delegateReader net/http/httputil:delegateReader  net/http/httputil.valueOrDefaultUQU=function(c,d){  �    if(!(c==="")){  return c;    }  #return d;    };valueOrDefault  net/http/httputil.dumpAsReceivedW-W=function(c,d){  �return $ifaceNil;    };dumpAsReceived net/http/httputil.DumpRequestX��X=$pkg.DumpRequest=function(c,d){var e=($sliceType($Uint8)).nil,f=$ifaceNil,g,h,i,j,k,l,m,n;  �g=c.Body;  �    if(!d||$interfaceIsEqual(c.Body,$ifaceNil)){  �c.Body=$ifaceNil;    }else{  �h=P(c.Body);g=h[0];c.Body=h[1];f=h[2];      if(!($interfaceIsEqual(f,$ifaceNil))){  %return[e,f];    }    }  5  9i=new B.Buffer.Ptr();$copy(i,new B.Buffer.Ptr(),B.Buffer);  JD.Fprintf(i,"%s %s HTTP/%d.%d\r\n",new($sliceType($emptyInterface))([new $String(U(c.Method,"GET")),new $String(c.URL.RequestURI()),new $Int(c.ProtoMajor),new $Int(c.ProtoMinor)]));  �j=c.Host;  �    if(j===""&&!(c.URL===($ptrType(I.URL)).nil)){  j=c.URL.Host;    }      if(!(j==="")){  /D.Fprintf(i,"Host: %s\r\n",new($sliceType($emptyInterface))([new $String(j)]));    }  Zl=c.TransferEncoding.$length>0&&(k=c.TransferEncoding,((0<0||0>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]))==="chunked";  �    if(c.TransferEncoding.$length>0){  �D.Fprintf(i,"Transfer-Encoding: %s\r\n",new($sliceType($emptyInterface))([new $String(J.Join(c.TransferEncoding,","))]));    }  +    if(c.Close){  <D.Fprintf(i,"Connection: close\r\n",new($sliceType($emptyInterface))([]));    }  jf=new H.Header(c.Header).WriteSubset(i,V);  �    if(!($interfaceIsEqual(f,$ifaceNil))){  �return[e,f];    }  �E.WriteString(i,"\r\n");  �    if(!($interfaceIsEqual(c.Body,$ifaceNil))){  �  �m=i;      if(l){  #m=AD(m);    }  Gn=E.Copy(m,c.Body);f=n[1];  j    if(l){  z$assertType(m,E.Closer).Close();  �E.WriteString(i,"\r\n");    }    }  �c.Body=g;  �    if(!($interfaceIsEqual(f,$ifaceNil))){  �return[e,f];    }  �e=i.Bytes();  �return[e,f];    };DumpRequestbytes:Bufferfmt:Fprintf	io:Closerio:Copyio:WriteString"net/http/httputil:NewChunkedWriternet/http/httputil:drainBody+net/http/httputil:reqWriteExcludeHeaderDump net/http/httputil:valueOrDefaultnet/http:Headernet/url:URLstrings:Join *(net/http/httputil.failureToReadBody).ReadqZ.Ptr.prototype.Read=function(c){  �return[0,Y];    };Z.prototype.Read=function(c){return this.$val.Read(c);};failureToReadBodynet/http/httputil:errNoBody#net/http/httputil:failureToReadBody +(net/http/httputil.failureToReadBody).ClosevZ.Ptr.prototype.Close=function(){  Dreturn $ifaceNil;    };Z.prototype.Close=function(){return this.$val.Close();};failureToReadBody#net/http/httputil:failureToReadBody net/http/httputil.DumpResponseAB��AB=$pkg.DumpResponse=function(c,d){var e=($sliceType($Uint8)).nil,f=$ifaceNil,g,h,i,j,k,l,m,n,o;    g=new B.Buffer.Ptr();$copy(g,new B.Buffer.Ptr(),B.Buffer);  'h=c.Body;  :i=c.ContentLength;  Y    if(!d){  fc.Body=(j=new Z.Ptr(),new j.constructor.Struct(j));        }else if($interfaceIsEqual(c.Body,$ifaceNil)){  �c.Body=AA;    }else{  �k=P(c.Body);h=k[0];c.Body=k[1];f=k[2];  �    if(!($interfaceIsEqual(f,$ifaceNil))){  	return[e,f];    }    }  f=c.Write(g);  .    if($interfaceIsEqual(f,Y)){  Ff=$ifaceNil;    }  Tc.Body=h;  fc.ContentLength=i;  �    if(!($interfaceIsEqual(f,$ifaceNil))){  �    l=($sliceType($Uint8)).nil;m=f;e=l;f=m;return[e,f];    }  �    n=g.Bytes();o=$ifaceNil;e=n;f=o;return[e,f];    };DumpResponsebytes:Buffernet/http/httputil:drainBodynet/http/httputil:emptyBodynet/http/httputil:errNoBody#net/http/httputil:failureToReadBody "net/http/httputil.NewChunkedReaderACNAC=$pkg.NewChunkedReader=function(c){   �return L.NewChunkedReader(c);    };NewChunkedReader"net/http/internal:NewChunkedReader "net/http/httputil.NewChunkedWriterADNAD=$pkg.NewChunkedWriter=function(c){  #return L.NewChunkedWriter(c);    };NewChunkedWriter"net/http/internal:NewChunkedWriter net/http/httputil.NewServerConnAG��AG=$pkg.NewServerConn=function(c,d){  *�    if(d===($ptrType(A.Reader)).nil){  *�d=A.NewReader(c);    }  +return new AF.Ptr(new N.Mutex.Ptr(),c,d,$ifaceNil,$ifaceNil,$ifaceNil,0,0,new $Map(),new M.Pipeline.Ptr());    };NewServerConnbufio:NewReaderbufio:Readernet/http/httputil:ServerConnnet/textproto:Pipeline
sync:Mutex &(*net/http/httputil.ServerConn).Hijack��AF.Ptr.prototype.Hijack=function(){var c=$ifaceNil,d=($ptrType(A.Reader)).nil,$deferred=[],$err=null,e;try{$deferFrames.push($deferred);  ,we=this;  ,�e.lk.Lock();  ,�$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  ,�c=e.c;  ,�d=e.r;  ,�e.c=$ifaceNil;  ,�e.r=($ptrType(A.Reader)).nil;  -return[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};AF.prototype.Hijack=function(){return this.$val.Hijack();};
ServerConnbufio:Readernet/http/httputil:ServerConn %(*net/http/httputil.ServerConn).Close��AF.Ptr.prototype.Close=function(){var c,d,e;  -Vc=this;  -wd=c.Hijack();e=d[0];  -�    if(!($interfaceIsEqual(e,$ifaceNil))){  -�return e.Close();    }  -�return $ifaceNil;    };AF.prototype.Close=function(){return this.$val.Close();};
ServerConnnet/http/httputil:ServerConn $(*net/http/httputil.ServerConn).Read�
�AF.Ptr.prototype.Read=function($b){var $this=this,$args=arguments,c=($ptrType(H.Request)).nil,d=$ifaceNil,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  .�e=$this;  /3f=e.pipe.Next();  /I$r=e.pipe.StartRequest(f,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  /c$deferred.push([(function($b){var $this=this,$args=arguments,$r,$s=0,g;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  /t$r=e.pipe.EndRequest(f,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  /�    if(c===($ptrType(H.Request)).nil){}else{$s=2;continue;}  /�$r=e.pipe.StartResponse(f,true);$s=4;case 4:if($r&&$r.$blocking){$r=$r();}  /�$r=e.pipe.EndResponse(f,true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();}    $s=3;continue;case 2:  0e.lk.Lock();  0"g=c;(e.pipereq||$throwRuntimeError("assignment to entry in nil map"))[g.$key()]={k:g,v:f};  0:e.lk.Unlock();    case 3:    case-1:}return;}};$f.$blocking=true;return $f;}),[true]]);  0Te.lk.Lock();  0b    if(!($interfaceIsEqual(e.we,$ifaceNil))){  0�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  0�    g=($ptrType(H.Request)).nil;h=e.we;c=g;d=h;return[c,d];    }  0�    if(!($interfaceIsEqual(e.re,$ifaceNil))){  0�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  1    i=($ptrType(H.Request)).nil;j=e.re;c=i;d=j;return[c,d];    }  1    if(e.r===($ptrType(A.Reader)).nil){  1Y$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  1p    k=($ptrType(H.Request)).nil;l=AE;c=k;d=l;return[c,d];    }  1�m=e.r;  1�n=e.lastbody;  1�e.lastbody=$ifaceNil;  1�e.lk.Unlock();  2    if(!($interfaceIsEqual(n,$ifaceNil))){  2�d=n.Close();  2�    if(!($interfaceIsEqual(d,$ifaceNil))){  2�e.lk.Lock();  2�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  3e.re=d;  3#    o=($ptrType(H.Request)).nil;p=d;c=o;d=p;return[c,d];    }    }  3<q=H.ReadRequest(m);c=q[0];d=q[1];  3\e.lk.Lock();  3j$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  3�    if(!($interfaceIsEqual(d,$ifaceNil))){  3�    if($interfaceIsEqual(d,E.ErrUnexpectedEOF)){  4Ce.re=$pkg.ErrPersistEOF;  4\    r=($ptrType(H.Request)).nil;s=e.re;c=r;d=s;return[c,d];    }else{  4|e.re=d;  4�    t=c;u=d;c=t;d=u;return[c,d];    }    }  4�e.lastbody=c.Body;  4�  4�e.nread=e.nread+(1)>>0;  4�    if(c.Close){  4�e.re=$pkg.ErrPersistEOF;  4�    v=c;w=e.re;c=v;d=w;return[c,d];    }  5    x=c;y=d;c=x;d=y;return[c,d];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[c,d];}};$f.$blocking=true;return $f;};AF.prototype.Read=function($b){return this.$val.Read($b);};
ServerConnbufio:Readerio:ErrUnexpectedEOFnet/http/httputil:ErrPersistEOFnet/http/httputil:ServerConnnet/http/httputil:errClosednet/http:ReadRequestnet/http:Request '(*net/http/httputil.ServerConn).Pending�rAF.Ptr.prototype.Pending=function(){var $deferred=[],$err=null,c;try{$deferFrames.push($deferred);  5�c=this;  5�c.lk.Lock();  5�$deferred.push([$methodVal(c.lk,"Unlock"),[]]);  5�return c.nread-c.nwritten>>0;    }catch(err){$err=err;return 0;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AF.prototype.Pending=function(){return this.$val.Pending();};
ServerConnnet/http/httputil:ServerConn %(*net/http/httputil.ServerConn).Write�ZAF.Ptr.prototype.Write=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  6�e=$this;  7`e.lk.Lock();  7nf=(g=e.pipereq[c.$key()],g!==undefined?[g.v,true]:[0,false]);h=f[0];i=f[1];  7�delete e.pipereq[c.$key()];  7�    if(!i){  7�e.lk.Unlock();  7�return $pkg.ErrPipeline;    }  7�e.lk.Unlock();  8 $r=e.pipe.StartResponse(h,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  8$deferred.push([$methodVal(e.pipe,"EndResponse"),[h,true]]);  8;e.lk.Lock();  8I    if(!($interfaceIsEqual(e.we,$ifaceNil))){  8]$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  8treturn e.we;    }  8�    if($interfaceIsEqual(e.c,$ifaceNil)){  8�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  8�return $pkg.ErrClosed;    }  8�j=e.c;  8�    if(e.nread<=e.nwritten){  9$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  92return C.New("persist server pipe count");    }  9e    if(d.Close){  :e.re=$pkg.ErrPersistEOF;    }  :%e.lk.Unlock();  :6k=d.Write(j);  :Le.lk.Lock();  :Z$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  :p    if(!($interfaceIsEqual(k,$ifaceNil))){  :�e.we=k;  :�return k;    }  :�  :�e.nwritten=e.nwritten+(1)>>0;  :�return $ifaceNil;    case-1:}return;}}catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AF.prototype.Write=function(c,d,$b){return this.$val.Write(c,d,$b);};
ServerConn
errors:Newnet/http/httputil:ErrClosednet/http/httputil:ErrPersistEOFnet/http/httputil:ErrPipelinenet/http/httputil:ServerConn net/http/httputil.NewClientConnAI�AI=$pkg.NewClientConn=function(c,d){  >�    if(d===($ptrType(A.Reader)).nil){  >�d=A.NewReader(c);    }  ?	return new AH.Ptr(new N.Mutex.Ptr(),c,d,$ifaceNil,$ifaceNil,$ifaceNil,0,0,new $Map(),new M.Pipeline.Ptr(),$methodExpr(($ptrType(H.Request)).prototype.Write));    };NewClientConnbufio:NewReaderbufio:Readernet/http/httputil:ClientConnnet/http:Requestnet/textproto:Pipeline
sync:Mutex $net/http/httputil.NewProxyClientConnAJ��AJ=$pkg.NewProxyClientConn=function(c,d){var e;  @�e=AI(c,d);  @�e.writeReq=$methodExpr(($ptrType(H.Request)).prototype.WriteProxy);  @�return e;    };NewProxyClientConnnet/http/httputil:NewClientConnnet/http:Request &(*net/http/httputil.ClientConn).Hijack��AH.Ptr.prototype.Hijack=function(){var c=$ifaceNil,d=($ptrType(A.Reader)).nil,$deferred=[],$err=null,e;try{$deferFrames.push($deferred);  B5e=this;  Boe.lk.Lock();  B}$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  B�c=e.c;  B�d=e.r;  B�e.c=$ifaceNil;  B�e.r=($ptrType(A.Reader)).nil;  B�return[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};AH.prototype.Hijack=function(){return this.$val.Hijack();};
ClientConnbufio:Readernet/http/httputil:ClientConn %(*net/http/httputil.ClientConn).Close��AH.Ptr.prototype.Close=function(){var c,d,e;  Cc=this;  C5d=c.Hijack();e=d[0];  CJ    if(!($interfaceIsEqual(e,$ifaceNil))){  CZreturn e.Close();    }  Coreturn $ifaceNil;    };AH.prototype.Close=function(){return this.$val.Close();};
ClientConnnet/http/httputil:ClientConn %(*net/http/httputil.ClientConn).Write�AH.Ptr.prototype.Write=function(c,$b){var $this=this,$args=arguments,d=$ifaceNil,$r,$deferred=[],$err=null,$s=0,e,f,g;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  Ee=$this;  Ehf=e.pipe.Next();  E~$r=e.pipe.StartRequest(f,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  E�$deferred.push([(function($b){var $this=this,$args=arguments,$r,$s=0,g;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  E�$r=e.pipe.EndRequest(f,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  E�    if(!($interfaceIsEqual(d,$ifaceNil))){}else{$s=2;continue;}  E�$r=e.pipe.StartResponse(f,true);$s=4;case 4:if($r&&$r.$blocking){$r=$r();}  E�$r=e.pipe.EndResponse(f,true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();}    $s=3;continue;case 2:  FGe.lk.Lock();  FWg=c;(e.pipereq||$throwRuntimeError("assignment to entry in nil map"))[g.$key()]={k:g,v:f};  Foe.lk.Unlock();    case 3:    case-1:}return;}};$f.$blocking=true;return $f;}),[true]]);  F�e.lk.Lock();  F�    if(!($interfaceIsEqual(e.re,$ifaceNil))){  F�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  F�    d=e.re;return d;    }  G    if(!($interfaceIsEqual(e.we,$ifaceNil))){  G$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  G0    d=e.we;return d;    }  GA    if($interfaceIsEqual(e.c,$ifaceNil)){  G�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  G�    d=AE;return d;    }  G�g=e.c;  G�    if(c.Close){  H/e.we=$pkg.ErrPersistEOF;    }  HIe.lk.Unlock();  HZd=e.writeReq(c,g);  Hue.lk.Lock();  H�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  H�    if(!($interfaceIsEqual(d,$ifaceNil))){  H�e.we=d;  H�    d=d;return d;    }  H�  H�e.nwritten=e.nwritten+(1)>>0;  H�    d=$ifaceNil;return d;    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return d;}};$f.$blocking=true;return $f;};AH.prototype.Write=function(c,$b){return this.$val.Write(c,$b);};
ClientConnnet/http/httputil:ClientConnnet/http/httputil:ErrPersistEOFnet/http/httputil:errClosed '(*net/http/httputil.ClientConn).Pending�rAH.Ptr.prototype.Pending=function(){var $deferred=[],$err=null,c;try{$deferFrames.push($deferred);  IKc=this;  Ilc.lk.Lock();  Iz$deferred.push([$methodVal(c.lk,"Unlock"),[]]);  I�return c.nwritten-c.nread>>0;    }catch(err){$err=err;return 0;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AH.prototype.Pending=function(){return this.$val.Pending();};
ClientConnnet/http/httputil:ClientConn $(*net/http/httputil.ClientConn).Read�BAH.Ptr.prototype.Read=function(c,$b){var $this=this,$args=arguments,d=($ptrType(H.Response)).nil,e=$ifaceNil,$r,$deferred=[],$err=null,$s=0,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  J�f=$this;  KNf.lk.Lock();  K\g=(h=f.pipereq[c.$key()],h!==undefined?[h.v,true]:[0,false]);i=g[0];j=g[1];  Kwdelete f.pipereq[c.$key()];  K�    if(!j){  K�f.lk.Unlock();  K�    k=($ptrType(H.Response)).nil;l=$pkg.ErrPipeline;d=k;e=l;return[d,e];    }  K�f.lk.Unlock();  K�$r=f.pipe.StartResponse(i,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  L$deferred.push([$methodVal(f.pipe,"EndResponse"),[i,true]]);  L.f.lk.Lock();  L<    if(!($interfaceIsEqual(f.re,$ifaceNil))){  LP$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  Lg    m=($ptrType(H.Response)).nil;n=f.re;d=m;e=n;return[d,e];    }  L}    if(f.r===($ptrType(A.Reader)).nil){  L�$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  L�    o=($ptrType(H.Response)).nil;p=AE;d=o;e=p;return[d,e];    }  L�q=f.r;  L�r=f.lastbody;  Mf.lastbody=$ifaceNil;  M%f.lk.Unlock();  M�    if(!($interfaceIsEqual(r,$ifaceNil))){  N$e=r.Close();  N=    if(!($interfaceIsEqual(e,$ifaceNil))){  NPf.lk.Lock();  N`$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  Nxf.re=e;  N�    s=($ptrType(H.Response)).nil;t=e;d=s;e=t;return[d,e];    }    }  N�u=H.ReadResponse(q,c);d=u[0];e=u[1];  N�f.lk.Lock();  N�$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  N�    if(!($interfaceIsEqual(e,$ifaceNil))){  N�f.re=e;  O    v=d;w=e;d=v;e=w;return[d,e];    }  O f.lastbody=d.Body;  O:  O:f.nread=f.nread+(1)>>0;  OG    if(d.Close){  OYf.re=$pkg.ErrPersistEOF;  O�    x=d;y=f.re;d=x;e=y;return[d,e];    }  O�    z=d;aa=e;d=z;e=aa;return[d,e];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[d,e];}};$f.$blocking=true;return $f;};AH.prototype.Read=function(c,$b){return this.$val.Read(c,$b);};
ClientConnbufio:Readernet/http/httputil:ClientConnnet/http/httputil:ErrPersistEOFnet/http/httputil:ErrPipelinenet/http/httputil:errClosednet/http:ReadResponsenet/http:Response "(*net/http/httputil.ClientConn).Do�.AH.Ptr.prototype.Do=function(c,$b){var $this=this,$args=arguments,d=($ptrType(H.Response)).nil,e=$ifaceNil,$r,$s=0,f,g,h,i;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  P
f=$this;  PTg=f.Write(c,true);$s=1;case 1:if(g&&g.$blocking){g=g();}e=g;  Pi    if(!($interfaceIsEqual(e,$ifaceNil))){  P{return[d,e];    }  P�    i=f.Read(c,true);$s=2;case 2:if(i&&i.$blocking){i=i();}h=i;d=h[0];e=h[1];return[d,e];    case-1:}return;}};$f.$blocking=true;return $f;};AH.prototype.Do=function(c,$b){return this.$val.Do(c,$b);};
ClientConnnet/http/httputil:ClientConnnet/http:Response $net/http/httputil.singleJoiningSlashAM��AM=function(c,d){var e,f;  U�e=J.HasSuffix(c,"/");  V f=J.HasPrefix(d,"/");  VE  VOif(e&&f){  Vhreturn c+d.substring(1);      Vz}else if(!e&&!f){  V�return c+"/"+d;    }  V�return c+d;    };singleJoiningSlashstrings:HasPrefixstrings:HasSuffix +net/http/httputil.NewSingleHostReverseProxyAN��AN=$pkg.NewSingleHostReverseProxy=function(c){var d,e;  W�d=c.RawQuery;  Xe=(function(e){  XCe.URL.Scheme=c.Scheme;  Xde.URL.Host=c.Host;  X�e.URL.Path=AM(c.Path,e.URL.Path);  X�    if(d===""||e.URL.RawQuery===""){  X�e.URL.RawQuery=d+e.URL.RawQuery;    }else{  Y4e.URL.RawQuery=d+"&"+e.URL.RawQuery;    }    });  Ytreturn new AL.Ptr(e,$ifaceNil,new K.Duration(0,0),($ptrType(O.Logger)).nil);    };NewSingleHostReverseProxy
log:Loggernet/http/httputil:ReverseProxy$net/http/httputil:singleJoiningSlashtime:Duration net/http/httputil.copyHeaderAO�KAO=function(c,d){var e,f,g,h,i,j,k,l,m;  Y�e=d;f=0;g=$keys(e);while(f<g.length){h=e[g[f]];        if(h===undefined){    f++;continue;    }i=h.k;j=h.v;  Y�k=j;l=0;while(l<k.$length){m=((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]);  Y�new H.Header(c).Add(i,m);    l++;}    f++;}    };
copyHeadernet/http:Header +(*net/http/httputil.ReverseProxy).ServeHTTP��AL.Ptr.prototype.ServeHTTP=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  [[e=$this;  [�f=e.Transport;  [�    if($interfaceIsEqual(f,$ifaceNil)){  [�f=H.DefaultTransport;    }  [�g=new H.Request.Ptr();  \$copy(g,d,H.Request);  \Xe.Director(g);  \lg.Proto="HTTP/1.1";  \�g.ProtoMajor=1;  \�g.ProtoMinor=1;  \�g.Close=false;  ]�h=false;  ^i=AP;j=0;while(j<i.$length){k=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  ^(    if(!(new H.Header(g.Header).Get(k)==="")){  ^K    if(!h){  ^cg.Header=new $Map();  ^�AO(g.Header,d.Header);  ^�h=true;    }  ^�new H.Header(g.Header).Del(k);    }    j++;}  ^�  ^�l=G.SplitHostPort(d.RemoteAddr);m=l[0];n=l[2];    if($interfaceIsEqual(n,$ifaceNil)){  _�  _�o=(p=g.Header["X-Forwarded-For"],p!==undefined?[p.v,true]:[($sliceType($String)).nil,false]);q=o[0];r=o[1];    if(r){  `
m=J.Join(q,", ")+", "+m;    }  `Gnew H.Header(g.Header).Set("X-Forwarded-For",m);    }  `{s=f.RoundTrip(g);t=s[0];u=s[1];  `�    if(!($interfaceIsEqual(u,$ifaceNil))){  `�e.logf("http: proxy error: %v",new($sliceType($emptyInterface))([u]));  `�c.WriteHeader(500);  areturn;    }  a$deferred.push([$methodVal(t.Body,"Close"),[true]]);  a2v=AP;w=0;while(w<v.$length){x=((w<0||w>=v.$length)?$throwRuntimeError("index out of range"):v.$array[v.$offset+w]);  aSnew H.Header(t.Header).Del(x);    w++;}  ajAO(c.Header(),t.Header);  a�c.WriteHeader(t.StatusCode);  a�$r=e.copyResponse(c,t.Body,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AL.prototype.ServeHTTP=function(c,d,$b){return this.$val.ServeHTTP(c,d,$b);};ReverseProxy
net/http/httputil:ReverseProxynet/http/httputil:copyHeadernet/http/httputil:copyResponsenet/http/httputil:hopHeadersnet/http/httputil:logfnet/http:DefaultTransportnet/http:Headernet/http:Requestnet:SplitHostPortstrings:Join .(*net/http/httputil.ReverseProxy).copyResponse��AL.Ptr.prototype.copyResponse=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  a�e=$this;  b    if(!((f=e.FlushInterval,(f.$high===0&&f.$low===0)))){}else{$s=1;continue;}  b1  b4g=$assertType(c,AQ,true);h=g[0];i=g[1];    if(i){}else{$s=2;continue;}  bZj=new AR.Ptr(h,e.FlushInterval,new N.Mutex.Ptr(),new($chanType($Bool,false,false))(0));  b�$go($methodVal(j,"flushLoop"),[]);  b�$deferred.push([$methodVal(j,"stop"),[true]]);  b�c=j;    case 2:    case 1:  cE.Copy(c,d);    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AL.prototype.copyResponse=function(c,d,$b){return this.$val.copyResponse(c,d,$b);};ReverseProxycopyResponseio:Copynet/http/httputil:ReverseProxynet/http/httputil:flushLoop"net/http/httputil:maxLatencyWriternet/http/httputil:stopnet/http/httputil:writeFlusher
sync:Mutextime:Duration &(*net/http/httputil.ReverseProxy).logf��AL.Ptr.prototype.logf=function(c,d){var e;  c!e=this;  c^    if(!(e.ErrorLog===($ptrType(O.Logger)).nil)){  cwe.ErrorLog.Printf(c,d);    }else{  c�O.Printf(c,d);    }    };AL.prototype.logf=function(c,d){return this.$val.logf(c,d);};ReverseProxylogf
log:Logger
log:Printfnet/http/httputil:ReverseProxy +(*net/http/httputil.maxLatencyWriter).Write�sAR.Ptr.prototype.Write=function(c){var $deferred=[],$err=null,d;try{$deferFrames.push($deferred);  d�d=this;  d�d.lk.Lock();  d�$deferred.push([$methodVal(d.lk,"Unlock"),[]]);  d�return d.dst.Write(c);    }catch(err){$err=err;return[0,$ifaceNil];}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AR.prototype.Write=function(c){return this.$val.Write(c);};maxLatencyWriter"net/http/httputil:maxLatencyWriter /(*net/http/httputil.maxLatencyWriter).flushLoop��AR.Ptr.prototype.flushLoop=function($b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,c,d,e,f;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  e	c=$this;  e-d=K.NewTicker(c.latency);  eM$deferred.push([$methodVal(d,"Stop"),[true]]);  e]case 1:if(!(true)){$s=2;continue;}  eef=$select([[c.done],[d.C]],true);$s=3;case 3:if(f&&f.$blocking){f=f();}e=f;    if(e[0]===0){  e�    if(!(AK===$throwNilPointerError)){  e�AK();    }  e�return;        }else if(e[0]===1){  e�c.lk.Lock();  e�c.dst.Flush();  e�c.lk.Unlock();    }    $s=1;continue;case 2:    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AR.prototype.flushLoop=function($b){return this.$val.flushLoop($b);};maxLatencyWriter	flushLoop"net/http/httputil:maxLatencyWriter!net/http/httputil:onExitFlushLooptime:NewTicker *(*net/http/httputil.maxLatencyWriter).stop�gAR.Ptr.prototype.stop=function($b){var $this=this,$args=arguments,$r,$s=0,c;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  fc=$this;  f0    $r=$send(c.done,true,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;};AR.prototype.stop=function($b){return this.$val.stop($b);};maxLatencyWriterstop"net/http/httputil:maxLatencyWriter ��{"Base":26178,"Files":[{"Name":"/usr/local/go/src/net/http/httputil/dump.go","Base":1,"Size":7616,"Lines":[0,55,109,159,160,177,178,187,196,205,215,222,228,241,248,260,271,282,290,292,293,366,445,522,541,609,631,674,697,700,734,757,760,844,846,847,918,941,952,963,965,966,1036,1106,1176,1246,1316,1386,1387,1409,1410,1467,1487,1504,1507,1527,1529,1530,1581,1631,1654,1722,1740,1760,1791,1808,1838,1922,1942,1946,1956,1972,2016,2034,2053,2057,2060,2061,2131,2192,2255,2316,2332,2364,2394,2412,2441,2467,2497,2500,2501,2564,2624,2682,2743,2770,2814,2835,2853,2871,2919,2983,2996,3048,3066,3111,3143,3180,3200,3204,3267,3272,3273,3296,3323,3374,3429,3434,3437,3438,3470,3471,3488,3505,3523,3526,3547,3548,3598,3662,3725,3787,3833,3849,3907,3928,3932,3935,3953,3955,3956,4020,4053,4082,4100,4142,4144,4145,4200,4217,4231,4234,4254,4256,4257,4301,4349,4367,4382,4385,4397,4399,4400,4449,4505,4533,4561,4589,4591,4592,4661,4732,4748,4808,4820,4822,4823,4890,4947,5003,5060,5112,5177,5197,5271,5289,5320,5337,5347,5391,5409,5419,5423,5426,5427,5447,5448,5524,5580,5581,5599,5634,5656,5659,5676,5716,5719,5720,5802,5838,5926,5929,5945,5988,5991,5992,6053,6070,6079,6082,6083,6111,6112,6134,6160,6175,6208,6212,6247,6262,6290,6320,6324,6327,6328,6345,6362,6371,6374,6392,6400,6402,6403,6485,6527,6578,6579,6650,6719,6786,6818,6850,6851,6926,6992,6993,7049,7050,7108,7185,7205,7224,7254,7255,7267,7301,7331,7355,7365,7411,7429,7439,7443,7446,7468,7491,7503,7506,7524,7553,7570,7588,7591,7614],"Infos":null},{"Name":"/usr/local/go/src/net/http/httputil/httputil.go","Base":7618,"Size":1545,"Lines":[0,55,109,159,160,231,276,293,294,303,309,330,332,333,418,471,546,549,624,688,735,772,774,775,856,937,1005,1008,1075,1138,1204,1273,1309,1361,1398,1400,1401,1467,1500],"Infos":null},{"Name":"/usr/local/go/src/net/http/httputil/persist.go","Base":9164,"Size":11472,"Lines":[0,55,109,159,160,177,178,187,196,206,212,219,231,248,256,258,259,265,347,426,494,496,497,555,620,685,686,756,830,899,974,1049,1083,1086,1161,1189,1214,1286,1312,1343,1387,1418,1439,1479,1480,1505,1507,1508,1585,1633,1636,1711,1739,1801,1816,1841,1844,1915,1917,1918,1998,2074,2151,2213,2276,2290,2312,2322,2332,2344,2356,2364,2366,2367,2436,2474,2495,2510,2529,2532,2544,2546,2547,2625,2704,2781,2806,2868,2869,2918,2940,2966,2982,3007,3025,3054,3081,3092,3139,3155,3179,3197,3201,3206,3207,3221,3293,3316,3336,3339,3358,3381,3401,3404,3467,3490,3514,3517,3528,3553,3572,3588,3589,3665,3687,3753,3811,3826,3851,3869,3885,3909,3924,3943,3947,3950,3951,3983,3997,4019,4036,4070,4125,4183,4212,4237,4258,4269,4284,4303,4307,4310,4334,4346,4362,4386,4406,4409,4426,4428,4429,4482,4528,4566,4580,4602,4633,4635,4636,4721,4799,4875,4951,4952,5011,5025,5052,5077,5087,5104,5125,5128,5144,5145,5171,5198,5229,5230,5244,5263,5286,5301,5304,5367,5390,5409,5412,5423,5453,5476,5525,5528,5545,5607,5670,5693,5717,5720,5736,5737,5759,5773,5795,5812,5826,5839,5842,5857,5858,5870,5872,5873,5943,6012,6067,6141,6144,6212,6260,6285,6357,6383,6414,6458,6489,6510,6550,6551,6580,6627,6629,6630,6708,6756,6759,6829,6867,6929,6944,6969,6972,6993,7008,7023,7065,7100,7103,7105,7106,7173,7211,7214,7275,7321,7388,7415,7457,7468,7470,7471,7551,7627,7701,7779,7842,7856,7878,7888,7898,7910,7922,7930,7932,7933,8002,8040,8061,8076,8095,8098,8110,8112,8113,8193,8270,8350,8425,8502,8563,8564,8603,8625,8651,8667,8692,8710,8739,8766,8777,8824,8840,8864,8882,8886,8891,8892,8906,8975,8998,9013,9016,9035,9058,9073,9076,9139,9162,9181,9184,9195,9211,9272,9313,9337,9340,9356,9357,9384,9398,9420,9437,9451,9464,9467,9482,9483,9495,9497,9498,9551,9593,9631,9645,9667,9698,9700,9701,9774,9846,9918,9973,10054,10113,10127,10154,10179,10189,10206,10232,10235,10251,10252,10278,10305,10336,10337,10351,10370,10393,10413,10416,10479,10502,10526,10529,10540,10565,10584,10600,10601,10677,10699,10765,10823,10838,10863,10881,10897,10921,10936,10955,10959,10962,10963,11002,11016,11038,11055,11069,11088,11091,11116,11117,11129,11130,11147,11203,11224,11227,11245,11247,11248,11320,11399,11420,11437,11446,11449,11470],"Infos":null},{"Name":"/usr/local/go/src/net/http/httputil/reverseproxy.go","Base":20637,"Size":5540,"Lines":[0,55,109,159,160,190,191,208,209,218,224,231,238,250,261,272,280,288,290,291,364,390,417,418,488,553,564,591,638,684,733,777,807,808,858,901,930,931,978,1023,1042,1085,1114,1115,1168,1221,1281,1302,1324,1326,1327,1373,1410,1447,1457,1481,1500,1526,1547,1550,1564,1566,1567,1637,1707,1776,1821,1885,1917,1956,1989,2018,2081,2132,2185,2196,2255,2259,2262,2304,2306,2307,2347,2373,2398,2415,2419,2422,2424,2425,2492,2550,2577,2592,2607,2630,2654,2694,2707,2729,2741,2743,2744,2822,2848,2871,2907,2910,2911,2940,3001,3002,3022,3049,3072,3095,3117,3118,3176,3235,3299,3358,3409,3433,3465,3499,3522,3560,3602,3627,3632,3656,3660,3663,3664,3736,3783,3833,3889,3946,4004,4008,4057,4060,4061,4102,4119,4158,4207,4216,4219,4243,4244,4276,4296,4299,4300,4337,4338,4370,4400,4402,4403,4471,4498,4538,4567,4584,4614,4644,4649,4671,4691,4704,4708,4711,4712,4731,4733,4734,4800,4824,4861,4871,4901,4904,4906,4907,4937,4948,4962,4964,4965,4996,5018,5041,5042,5085,5101,5103,5104,5162,5175,5196,5219,5221,5222,5263,5295,5311,5318,5329,5346,5377,5399,5404,5414,5428,5443,5460,5477,5481,5484,5486,5487],"Infos":null}]}
 