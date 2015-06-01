p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �G+��net/smtpsmtp
crypto/hmac
crypto/md5
crypto/tlsencoding/base64errorsfmtionetnet/textprotostrings���package smtp
import hmac "crypto/hmac"
import md5 "crypto/md5"
import errors "errors"
import fmt "fmt"
import tls "crypto/tls"
import base64 "encoding/base64"
import io "io"
import net "net"
import textproto "net/textproto"
import strings "strings"
type @"".Auth interface { @"".Next(@"".fromServer []byte, @"".more bool) (@"".toServer []byte, @"".err error); @"".Start(@"".server *@"".ServerInfo) (@"".proto string, @"".toServer []byte, @"".err error) }
func @"".CRAMMD5Auth(@"".username string, @"".secret string) (? @"".Auth)
type @"".Client struct { @"".Text *@"net/textproto".Conn; @"".conn @"net".Conn; @"".tls bool; @"".serverName string; @"".ext map[string]string; @"".auth []string; @"".localName string; @"".didHello bool; @"".helloError error }
func (? *@"".Client) @"".Auth(@"".a @"".Auth) (? error)
func (? *@"".Client) @"".Close() (? error)
func (? *@"".Client) @"".Data() (? @"io".WriteCloser, ? error)
func (? *@"".Client) @"".Extension(@"".ext string) (? bool, ? string)
func (? *@"".Client) @"".Hello(@"".localName string) (? error)
func (? *@"".Client) @"".Mail(@"".from string) (? error)
func (? *@"".Client) @"".Quit() (? error)
func (? *@"".Client) @"".Rcpt(@"".to string) (? error)
func (? *@"".Client) @"".Reset() (? error)
func (? *@"".Client) @"".StartTLS(@"".config *@"crypto/tls".Config) (? error)
func (? *@"".Client) @"".Verify(@"".addr string) (? error)
func (? *@"".Client) @"".cmd(@"".expectCode int, @"".format string, @"".args ...interface {  }) (? int, ? string, ? error)
func (? *@"".Client) @"".ehlo() (? error)
func (? *@"".Client) @"".hello() (? error)
func (? *@"".Client) @"".helo() (? error)
func @"".Dial(@"".addr string) (? *@"".Client, ? error)
func @"".NewClient(@"".conn @"net".Conn, @"".host string) (? *@"".Client, ? error)
func @"".PlainAuth(@"".identity string, @"".username string, @"".password string, @"".host string) (? @"".Auth)
func @"".SendMail(@"".addr string, @"".a @"".Auth, @"".from string, @"".to []string, @"".msg []byte) (? error)
type @"".ServerInfo struct { @"".Name string; @"".TLS bool; @"".Auth []string }
type @"".cramMD5Auth struct { @"".username string; @"".secret string }
func (? *@"".cramMD5Auth) @"".Next(@"".fromServer []byte, @"".more bool) (? []byte, ? error)
func (? *@"".cramMD5Auth) @"".Start(@"".server *@"".ServerInfo) (? string, ? []byte, ? error)
type @"".dataCloser struct { @"".c *@"".Client; ? @"io".WriteCloser }
func (? *@"".dataCloser) @"".Close() (? error)
type @"".plainAuth struct { @"".identity string; @"".username string; @"".password string; @"".host string }
func (? *@"".plainAuth) @"".Next(@"".fromServer []byte, @"".more bool) (? []byte, ? error)
func (? *@"".plainAuth) @"".Start(@"".server *@"".ServerInfo) (? string, ? []byte, ? error)
type @"net/textproto".Conn struct { ? @"net/textproto".Reader; ? @"net/textproto".Writer; ? @"net/textproto".Pipeline; @"net/textproto".conn @"io".ReadWriteCloser }
func (? *@"net/textproto".Conn) @"net/textproto".Close() (? error)
func (? *@"net/textproto".Conn) @"net/textproto".Cmd(@"net/textproto".format string, @"net/textproto".args ...interface {  }) (@"net/textproto".id uint, @"net/textproto".err error)
import time "time"
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
import x509 "crypto/x509"
import sync "sync"
type @"crypto/tls".Config struct { @"crypto/tls".Rand @"io".Reader; @"crypto/tls".Time func () (? @"time".Time); @"crypto/tls".Certificates []@"crypto/tls".Certificate; @"crypto/tls".NameToCertificate map[string]*@"crypto/tls".Certificate; @"crypto/tls".GetCertificate func (@"crypto/tls".clientHello *@"crypto/tls".ClientHelloInfo) (? *@"crypto/tls".Certificate, ? error); @"crypto/tls".RootCAs *@"crypto/x509".CertPool; @"crypto/tls".NextProtos []string; @"crypto/tls".ServerName string; @"crypto/tls".ClientAuth @"crypto/tls".ClientAuthType; @"crypto/tls".ClientCAs *@"crypto/x509".CertPool; @"crypto/tls".InsecureSkipVerify bool; @"crypto/tls".CipherSuites []uint16; @"crypto/tls".PreferServerCipherSuites bool; @"crypto/tls".SessionTicketsDisabled bool; @"crypto/tls".SessionTicketKey [32]byte; @"crypto/tls".ClientSessionCache @"crypto/tls".ClientSessionCache; @"crypto/tls".MinVersion uint16; @"crypto/tls".MaxVersion uint16; @"crypto/tls".CurvePreferences []@"crypto/tls".CurveID; @"crypto/tls".serverInitOnce @"sync".Once }
func (? *@"crypto/tls".Config) @"crypto/tls".BuildNameToCertificate() ()
func (? *@"crypto/tls".Config) @"crypto/tls".cipherSuites() (? []uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".curvePreferences() (? []@"crypto/tls".CurveID)
func (? *@"crypto/tls".Config) @"crypto/tls".getCertificate(@"crypto/tls".clientHello *@"crypto/tls".ClientHelloInfo) (? *@"crypto/tls".Certificate, ? error)
func (? *@"crypto/tls".Config) @"crypto/tls".maxVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".minVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".mutualVersion(@"crypto/tls".vers uint16) (? uint16, ? bool)
func (? *@"crypto/tls".Config) @"crypto/tls".rand() (? @"io".Reader)
func (? *@"crypto/tls".Config) @"crypto/tls".serverInit() ()
func (? *@"crypto/tls".Config) @"crypto/tls".time() (? @"time".Time)
import bufio "bufio"
type @"net/textproto".Reader struct { @"net/textproto".R *@"bufio".Reader; @"net/textproto".dot *@"net/textproto".dotReader; @"net/textproto".buf []byte }
func (? *@"net/textproto".Reader) @"net/textproto".DotReader() (? @"io".Reader)
func (? *@"net/textproto".Reader) @"net/textproto".ReadCodeLine(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadContinuedLine() (? string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadContinuedLineBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadDotBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadDotLines() (? []string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadLine() (? string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadLineBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadMIMEHeader() (? @"net/textproto".MIMEHeader, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadResponse(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".closeDot() ()
func (? *@"net/textproto".Reader) @"net/textproto".readCodeLine(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".continued bool, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".readContinuedLineSlice() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".readLineSlice() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".skipSpace() (? int)
func (? *@"net/textproto".Reader) @"net/textproto".upcomingHeaderNewlines() (@"net/textproto".n int)
type @"net/textproto".Writer struct { @"net/textproto".W *@"bufio".Writer; @"net/textproto".dot *@"net/textproto".dotWriter }
func (? *@"net/textproto".Writer) @"net/textproto".DotWriter() (? @"io".WriteCloser)
func (? *@"net/textproto".Writer) @"net/textproto".PrintfLine(@"net/textproto".format string, @"net/textproto".args ...interface {  }) (? error)
func (? *@"net/textproto".Writer) @"net/textproto".closeDot() ()
type @"net/textproto".Pipeline struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".request @"net/textproto".sequencer; @"net/textproto".response @"net/textproto".sequencer }
func (? *@"net/textproto".Pipeline) @"net/textproto".EndRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".EndResponse(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".Next() (? uint)
func (? *@"net/textproto".Pipeline) @"net/textproto".StartRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".StartResponse(@"net/textproto".id uint) ()
type @"io".ReadWriteCloser interface { @"io".Close() (? error); @"io".Read(@"".p []byte) (@"".n int, @"".err error); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"".years int, @"".months int, @"".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"".hour int, @"".min int, @"".sec int)
func (? @"time".Time) @"time".Date() (@"".year int, @"".month @"time".Month, @"".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"".year int, @"".week int)
func (? @"time".Time) @"time".In(@"".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"".name string, @"".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"".full bool) (@"".year int, @"".month @"time".Month, @"".day int, @"".yday int)
func (? @"time".Time) @"time".locabs() (@"".name string, @"".offset int, @"".abs uint64)
func (? *@"time".Time) @"time".Add(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"".years int, @"".months int, @"".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"".hour int, @"".min int, @"".sec int)
func (? *@"time".Time) @"time".Date() (@"".year int, @"".month @"time".Month, @"".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"".year int, @"".week int)
func (? *@"time".Time) @"time".In(@"".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"".data []byte) (@"".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"".data []byte) (@"".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"".name string, @"".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"".full bool) (@"".year int, @"".month @"time".Month, @"".day int, @"".yday int)
func (? *@"time".Time) @"time".locabs() (@"".name string, @"".offset int, @"".abs uint64)
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
import crypto "crypto"
type @"crypto/tls".Certificate struct { @"crypto/tls".Certificate [][]byte; @"crypto/tls".PrivateKey @"crypto".PrivateKey; @"crypto/tls".OCSPStaple []byte; @"crypto/tls".Leaf *@"crypto/x509".Certificate }
type @"crypto/tls".ClientHelloInfo struct { @"crypto/tls".CipherSuites []uint16; @"crypto/tls".ServerName string; @"crypto/tls".SupportedCurves []@"crypto/tls".CurveID; @"crypto/tls".SupportedPoints []uint8 }
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientAuthType int
type @"crypto/tls".ClientSessionCache interface { @"crypto/tls".Get(@"crypto/tls".sessionKey string) (@"crypto/tls".session *@"crypto/tls".ClientSessionState, @"crypto/tls".ok bool); @"crypto/tls".Put(@"crypto/tls".sessionKey string, @"crypto/tls".cs *@"crypto/tls".ClientSessionState) () }
type @"crypto/tls".CurveID uint16
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"".f func () ()) ()
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"".c byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"".line []byte, @"".isPrefix bool, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"".r rune, @"".size int, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"".delim byte) (@"".line []byte, @"".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"".delim byte) (@"".line string, @"".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"".w @"io".Writer) (@"".n int64, @"".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"".buf []byte, @"".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"".w @"io".Writer) (? int64, ? error)
type @"net/textproto".dotReader struct { @"net/textproto".r *@"net/textproto".Reader; @"net/textproto".state int }
func (? *@"net/textproto".dotReader) @"net/textproto".Read(@"net/textproto".b []byte) (@"net/textproto".n int, @"net/textproto".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"".p []byte) (@"".nn int, @"".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"".r rune) (@"".size int, @"".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"net/textproto".dotWriter struct { @"net/textproto".w *@"net/textproto".Writer; @"net/textproto".state int }
func (? *@"net/textproto".dotWriter) @"net/textproto".Close() (? error)
func (? *@"net/textproto".dotWriter) @"net/textproto".Write(@"net/textproto".b []byte) (@"net/textproto".n int, @"net/textproto".err error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net/textproto".sequencer struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".wait map[uint]chan uint }
func (? *@"net/textproto".sequencer) @"net/textproto".End(@"net/textproto".id uint) ()
func (? *@"net/textproto".sequencer) @"net/textproto".Start(@"net/textproto".id uint) ()
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"".sec int64) (@"".name string, @"".offset int, @"".isDST bool, @"".start int64, @"".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"".name string, @"".unix int64) (@"".offset int, @"".isDST bool, @"".ok bool)
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
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"crypto".PrivateKey interface {  }
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
type @"crypto/tls".ClientSessionState struct { @"crypto/tls".sessionTicket []uint8; @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".serverCertificates []*@"crypto/x509".Certificate }
type @"io".Writer interface { @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"".n int64, @"".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"".y *@"math/big".Int) (@"".r int)
func (? *@"math/big".Int) @"math/big".Div(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Format(@"".s @"fmt".State, @"".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"".text []byte, @"".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"".g *@"math/big".Int, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"".a int64, @"".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"".rnd *@"math/rand".Rand, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"".s @"fmt".ScanState, @"".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"".x *@"math/big".Int, @"".i int, @"".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"".s string, @"".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? *@"math/big".Int, ? int, ? error)
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
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"".c int) (? bool); @"fmt".Precision() (@"".prec int, @"".ok bool); @"fmt".Width() (@"".wid int, @"".ok bool); @"fmt".Write(@"".b []byte) (@"".ret int, @"".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"".buf []byte) (@"".n int, @"".err error); @"fmt".ReadRune() (@"".r rune, @"".size int, @"".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".token []byte, @"".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"".wid int, @"".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"".r rune, @"".size int, @"".err error); @"io".UnreadRune() (? error) }
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
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
:AA=$packages["crypto/hmac"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["crypto/md5"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["crypto/tls"];a    $r=E.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["encoding/base64"];a    $r=F.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["io"];a    $r=G.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["net"];a    $r=H.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} II=$packages["net/textproto"];a    $r=I.$init();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} JJ=$packages["strings"];c    $r=J.$init();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} KJK=$pkg.Auth=$newType(8,$kindInterface,"smtp.Auth","Auth","net/smtp",null);��K.init([{prop:"Next",name:"Next",pkg:"",typ:$funcType([W,$Bool],[W,$error],false)},{prop:"Start",name:"Start",pkg:"",typ:$funcType([AG],[$String,W,$error],false)}]);Authnet/smtp.AGnet/smtp.Authnet/smtp.ServerInfo
net/smtp.W L��L=$pkg.ServerInfo=$newType(0,$kindStruct,"smtp.ServerInfo","ServerInfo","net/smtp",function(Name_,TLS_,Auth_){this.$val=this;if(arguments.length===0){this.Name="";this.TLS=false;this.Auth=AA.nil;return;}this.Name=Name_;this.TLS=TLS_;this.Auth=Auth_;});��L.init([{prop:"Name",name:"Name",pkg:"",typ:$String,tag:""},{prop:"TLS",name:"TLS",pkg:"",typ:$Bool,tag:""},{prop:"Auth",name:"Auth",pkg:"",typ:AA,tag:""}]);
ServerInfonet/smtp.AAnet/smtp.ServerInfo M�IM=$pkg.plainAuth=$newType(0,$kindStruct,"smtp.plainAuth","plainAuth","net/smtp",function(identity_,username_,password_,host_){this.$val=this;if(arguments.length===0){this.identity="";this.username="";this.password="";this.host="";return;}this.identity=identity_;this.username=username_;this.password=password_;this.host=host_;});��AH.methods=[{prop:"Start",name:"Start",pkg:"",typ:$funcType([AG],[$String,W,$error],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([W,$Bool],[W,$error],false)}];�M.init([{prop:"identity",name:"identity",pkg:"net/smtp",typ:$String,tag:""},{prop:"username",name:"username",pkg:"net/smtp",typ:$String,tag:""},{prop:"password",name:"password",pkg:"net/smtp",typ:$String,tag:""},{prop:"host",name:"host",pkg:"net/smtp",typ:$String,tag:""}]);	plainAuthnet/smtp.AGnet/smtp.AH
net/smtp.Wnet/smtp.plainAuth O��O=$pkg.cramMD5Auth=$newType(0,$kindStruct,"smtp.cramMD5Auth","cramMD5Auth","net/smtp",function(username_,secret_){this.$val=this;if(arguments.length===0){this.username="";this.secret="";return;}this.username=username_;this.secret=secret_;});��AI.methods=[{prop:"Start",name:"Start",pkg:"",typ:$funcType([AG],[$String,W,$error],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([W,$Bool],[W,$error],false)}];��O.init([{prop:"username",name:"username",pkg:"net/smtp",typ:$String,tag:""},{prop:"secret",name:"secret",pkg:"net/smtp",typ:$String,tag:""}]);cramMD5Authnet/smtp.AGnet/smtp.AI
net/smtp.Wnet/smtp.cramMD5Auth Q�)Q=$pkg.Client=$newType(0,$kindStruct,"smtp.Client","Client","net/smtp",function(Text_,conn_,tls_,serverName_,ext_,auth_,localName_,didHello_,helloError_){this.$val=this;if(arguments.length===0){this.Text=Z.nil;this.conn=$ifaceNil;this.tls=false;this.serverName="";this.ext=false;this.auth=AA.nil;this.localName="";this.didHello=false;this.helloError=$ifaceNil;return;}this.Text=Text_;this.conn=conn_;this.tls=tls_;this.serverName=serverName_;this.ext=ext_;this.auth=auth_;this.localName=localName_;this.didHello=didHello_;this.helloError=helloError_;});�{Y.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"hello",name:"hello",pkg:"net/smtp",typ:$funcType([],[$error],false)},{prop:"Hello",name:"Hello",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"cmd",name:"cmd",pkg:"net/smtp",typ:$funcType([$Int,$String,X],[$Int,$String,$error],true)},{prop:"helo",name:"helo",pkg:"net/smtp",typ:$funcType([],[$error],false)},{prop:"ehlo",name:"ehlo",pkg:"net/smtp",typ:$funcType([],[$error],false)},{prop:"StartTLS",name:"StartTLS",pkg:"",typ:$funcType([AJ],[$error],false)},{prop:"Verify",name:"Verify",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"Auth",name:"Auth",pkg:"",typ:$funcType([K],[$error],false)},{prop:"Mail",name:"Mail",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"Rcpt",name:"Rcpt",pkg:"",typ:$funcType([$String],[$error],false)},{prop:"Data",name:"Data",pkg:"",typ:$funcType([],[G.WriteCloser,$error],false)},{prop:"Extension",name:"Extension",pkg:"",typ:$funcType([$String],[$Bool,$String],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[$error],false)},{prop:"Quit",name:"Quit",pkg:"",typ:$funcType([],[$error],false)}];�.Q.init([{prop:"Text",name:"Text",pkg:"",typ:Z,tag:""},{prop:"conn",name:"conn",pkg:"net/smtp",typ:H.Conn,tag:""},{prop:"tls",name:"tls",pkg:"net/smtp",typ:$Bool,tag:""},{prop:"serverName",name:"serverName",pkg:"net/smtp",typ:$String,tag:""},{prop:"ext",name:"ext",pkg:"net/smtp",typ:AK,tag:""},{prop:"auth",name:"auth",pkg:"net/smtp",typ:AA,tag:""},{prop:"localName",name:"localName",pkg:"net/smtp",typ:$String,tag:""},{prop:"didHello",name:"didHello",pkg:"net/smtp",typ:$Bool,tag:""},{prop:"helloError",name:"helloError",pkg:"net/smtp",typ:$error,tag:""}]);Clientcrypto/tls.Configio.WriteClosernet.Connnet/smtp.AAnet/smtp.AJnet/smtp.AKnet/smtp.Authnet/smtp.Client
net/smtp.X
net/smtp.Y
net/smtp.Z T��T=$pkg.dataCloser=$newType(0,$kindStruct,"smtp.dataCloser","dataCloser","net/smtp",function(c_,WriteCloser_){this.$val=this;if(arguments.length===0){this.c=Y.nil;this.WriteCloser=$ifaceNil;return;}this.c=c_;this.WriteCloser=WriteCloser_;});QAL.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];wT.init([{prop:"c",name:"c",pkg:"net/smtp",typ:Y,tag:""},{prop:"WriteCloser",name:"",pkg:"",typ:G.WriteCloser,tag:""}]);
dataCloserio.WriteClosernet/smtp.AL
net/smtp.Ynet/smtp.dataCloser WW=$sliceType($Uint8);W XX=$sliceType($emptyInterface);X YY=$ptrType(Q);Ynet/smtp.Client ZZ=$ptrType(I.Conn);Znet/textproto.Conn AAAA=$sliceType($String);AA ABAB=$sliceType(E.Certificate);ABcrypto/tls.Certificate AC/AC=$ptrType($packages["crypto/x509"].CertPool);ACcrypto/x509.CertPool ADAD=$sliceType($Uint16);AD AEAE=$arrayType($Uint8,32);AE AFAF=$sliceType(E.CurveID);AFcrypto/tls.CurveID AGAG=$ptrType(L);AGnet/smtp.ServerInfo AHAH=$ptrType(M);AHnet/smtp.plainAuth AIAI=$ptrType(O);AInet/smtp.cramMD5Auth AJAJ=$ptrType(E.Config);AJcrypto/tls.Config AKAK=$mapType($String,$String);AK ALAL=$ptrType(T);ALnet/smtp.dataCloser UU=$throwNilPointerError;testHookStartTLSnet/smtp.testHookStartTLS net/smtp.PlainAuthN\N=function(a,b,c,d){var $ptr,a,b,c,d;  _return new M.ptr(a,b,c,d);    };$pkg.PlainAuth=N;	PlainAuthnet/smtp.PlainAuthnet/smtp.plainAuth (*net/smtp.plainAuth).Start�{M.ptr.prototype.Start=function(a){var $ptr,a,b,c,d,e,f,g;  �b=this;    if(!a.TLS){  �c=false;  
d=a.Auth;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);    if(f==="PLAIN"){  Sc=true;  ibreak;    }    e++;}    if(!c){  �return["",W.nil,C.New("unencrypted connection")];    }    }    if(!(a.Name===b.host)){  �return["",W.nil,C.New("wrong host name")];    }  	g=new W($stringToBytes(b.identity+"\x00"+b.username+"\x00"+b.password));  	breturn["PLAIN",g,$ifaceNil];    };M.prototype.Start=function(a){return this.$val.Start(a);};	plainAuth
errors.New
net/smtp.Wnet/smtp.plainAuth (*net/smtp.plainAuth).Next��M.ptr.prototype.Next=function(a,b){var $ptr,a,b,c;  	�c=this;    if(b){  	�return[W.nil,C.New("unexpected server challenge")];    }  
3return[W.nil,$ifaceNil];    };M.prototype.Next=function(a,b){return this.$val.Next(a,b);};	plainAuth
errors.New
net/smtp.Wnet/smtp.plainAuth net/smtp.CRAMMD5AuthPRP=function(a,b){var $ptr,a,b;  �return new O.ptr(a,b);    };$pkg.CRAMMD5Auth=P;CRAMMD5Authnet/smtp.CRAMMD5Authnet/smtp.cramMD5Auth (*net/smtp.cramMD5Auth).Start��O.ptr.prototype.Start=function(a){var $ptr,a,b;  �b=this;  return["CRAM-MD5",W.nil,$ifaceNil];    };O.prototype.Start=function(a){return this.$val.Start(a);};cramMD5Auth
net/smtp.Wnet/smtp.cramMD5Auth (*net/smtp.cramMD5Auth).Next�O.ptr.prototype.Next=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  8c=this;  ~if(b){$s=1;continue;}$s=2;continue;    case 1:  �d=A.New(B.New,new W($stringToBytes(c.secret)));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  �f=e.Write(a);$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  �g=e.Size();$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=$makeSlice(W,0,g);  �i=new $String(c.username);j=e.Sum(h);$s=6;case 6:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j;l=D.Sprintf("%s %x",new X([i,k]));$s=7;case 7:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}return[new W($stringToBytes(l)),$ifaceNil];    case 2:  /return[W.nil,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:O.ptr.prototype.Next};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};O.prototype.Next=function(a,b){return this.$val.Next(a,b);};cramMD5Authcrypto/hmac.Newcrypto/md5.Newfmt.Sprintf
net/smtp.W
net/smtp.Xnet/smtp.cramMD5Auth net/smtp.DialR�~R=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  nb=H.Dial("tcp",a);c=b[0];d=b[1];    if(!($interfaceIsEqual(d,$ifaceNil))){  �return[Y.nil,d];    }  �e=H.SplitHostPort(a);f=e[0];  �g=S(c,f);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}return g;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Dial=R;Dialnet.Dialnet.SplitHostPortnet/smtp.Clientnet/smtp.Dialnet/smtp.NewClient
net/smtp.Y net/smtp.NewClientS�fS=function(a,b){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=I.NewConn(a);  �e=c.Reader.ReadResponse(220);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[2];   if(!($interfaceIsEqual(f,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  g=c.Close();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}g;  !return[Y.nil,f];    case 3:  5h=new Q.ptr(c,a,false,b,false,AA.nil,"localhost",false,$ifaceNil);  �return[h,$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:S};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewClient=S;	NewClientnet/smtp.AAnet/smtp.Clientnet/smtp.NewClient
net/smtp.Y
net/smtp.Znet/textproto.Connnet/textproto.NewConn (*net/smtp.Client).Close�	Q.ptr.prototype.Close=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �b=a.Text.Close();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Close=function(){return this.$val.Close();};Clientnet/smtp.Client (*net/smtp.Client).hello�`Q.ptr.prototype.hello=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !a=this;  =if(!a.didHello){$s=1;continue;}$s=2;continue;    case 1:  Pa.didHello=true;  db=a.ehlo();$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  vif(!($interfaceIsEqual(c,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  �d=a.helo();$s=6;case 6:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}a.helloError=d;    case 5:    case 2:  �return a.helloError;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.hello};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.hello=function(){return this.$val.hello();};Clienthello~net/smtp.Clientnet/smtp.ehlo~net/smtp.helo~ (*net/smtp.Client).Hello��Q.ptr.prototype.Hello=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  b=this;    if(b.didHello){  Areturn C.New("smtp: Hello called after other methods");    }  �b.localName=a;  �c=b.hello();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Hello};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Hello=function(a){return this.$val.Hello(a);};Client
errors.Newnet/smtp.Clientnet/smtp.hello~ (*net/smtp.Client).cmd�|Q.ptr.prototype.cmd=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  d=this;  ^f=d.Text.Cmd(b,c);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[0,"",h];    }  �$r=d.Text.Pipeline.StartResponse(g);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$deferred.push([$methodVal(d.Text.Pipeline,"EndResponse"),[g]]);  �j=d.Text.Reader.ReadResponse(a);$s=3;case 3:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[0];l=i[1];h=i[2];  return[k,l,h];    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return[0,"",$ifaceNil];}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:Q.ptr.prototype.cmd};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};Q.prototype.cmd=function(a,b,c){return this.$val.cmd(a,b,c);};Clientcmd~net/smtp.Client (*net/smtp.Client).helo�nQ.ptr.prototype.helo=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �a.ext=false;  �c=a.cmd(250,"HELO %s",new X([new $String(a.localName)]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[2];  return d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.helo};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.helo=function(){return this.$val.helo();};Clienthelo~net/smtp.Client
net/smtp.Xnet/smtp.cmd~ (*net/smtp.Client).ehlo��Q.ptr.prototype.ehlo=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �c=a.cmd(250,"EHLO %s",new X([new $String(a.localName)]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];e=b[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return e;    }  f=new $Map();  (g=J.Split(d,"\n");    if(g.$length>1){  eg=$subslice(g,1);  }h=g;i=0;while(true){if(!(i<h.$length)){break;}j=((i<0||i>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+i]);  �k=J.SplitN(j," ",2);    if(k.$length>1){  �l=(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]);(f||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(l)]={k:l,v:(1>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+1])};    }else{  m=(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]);(f||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(m)]={k:m,v:""};    }    i++;}    }  'n=(o=f[$String.keyFor("AUTH")],o!==undefined?[o.v,true]:["",false]);p=n[0];q=n[1];    if(q){  Ha.auth=J.Split(p," ");    }  oa.ext=f;  |return e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.ehlo};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.ehlo=function(){return this.$val.ehlo();};Clientehlo~net/smtp.Client
net/smtp.Xnet/smtp.cmd~strings.Splitstrings.SplitN (*net/smtp.Client).StartTLS�DQ.ptr.prototype.StartTLS=function(a){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  ,b=this;  `c=b.hello();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return d;    case 3:  �f=b.cmd(220,"STARTTLS",new X([]));$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[2];    if(!($interfaceIsEqual(g,$ifaceNil))){  �return g;    }  �b.conn=E.Client(b.conn,a);  �b.Text=I.NewConn(b.conn);  b.tls=true;  -h=b.ehlo();$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}return h;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.StartTLS};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.StartTLS=function(a){return this.$val.StartTLS(a);};Clientcrypto/tls.Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~net/smtp.ehlo~net/smtp.hello~net/textproto.NewConn (*net/smtp.Client).Verify�WQ.ptr.prototype.Verify=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  =b=this;  hc=b.hello();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return d;    case 3:  �f=b.cmd(250,"VRFY %s",new X([new $String(a)]));$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[2];  �return g;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Verify};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Verify=function(a){return this.$val.Verify(a);};Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~net/smtp.hello~ (*net/smtp.Client).Auth�,Q.ptr.prototype.Auth=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:   �b=this;   �c=b.hello();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:   �return d;    case 3:   �e=F.StdEncoding;  !g=a.Start(new L.ptr(b.serverName,b.tls,b.auth));$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];j=f[2];  !Wif(!($interfaceIsEqual(j,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  !ik=b.Quit();$s=7;case 7:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}k;  !treturn j;    case 6:  !�l=$makeSlice(W,e.EncodedLen(i.$length));  !�e.Encode(l,i);  !�n=b.cmd(0,"AUTH %s %s",new X([new $String(h),l]));$s=8;case 8:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;o=m[0];p=m[1];j=m[2];  "case 9:if(!($interfaceIsEqual(j,$ifaceNil))){$s=10;continue;}  "+q=W.nil;  "8r=o;if(r===334){$s=11;continue;}if(r===235){$s=12;continue;}$s=13;continue;  "Hcase 11:  "Ut=e.DecodeString(p);$s=15;case 15:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}s=t;q=s[0];j=s[1];    $s=14;continue;  "case 12:  "�q=new W($stringToBytes(p));    $s=14;continue;case 13:  "�j=new I.Error.ptr(o,p);    case 14:  #$if($interfaceIsEqual(j,$ifaceNil)){$s=16;continue;}$s=17;continue;    case 16:  #7v=a.Next(q,o===334);$s=18;case 18:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;i=u[0];j=u[1];    case 17:  #bif(!($interfaceIsEqual(j,$ifaceNil))){$s=19;continue;}$s=20;continue;    case 19:  #�w=b.cmd(501,"*",new X([]));$s=21;case 21:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}w;  #�x=b.Quit();$s=22;case 22:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}x;  #�$s=10;continue;    case 20:    if(i===W.nil){  #�$s=10;continue;    }  #�l=$makeSlice(W,e.EncodedLen(i.$length));  $e.Encode(l,i);  $-z=b.cmd(0,$bytesToString(l),new X([]));$s=23;case 23:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}y=z;o=y[0];p=y[1];j=y[2];    $s=9;continue;case 10:  $]return j;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Auth};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Auth=function(a){return this.$val.Auth(a);};Clientencoding/base64.StdEncodingnet/smtp.Clientnet/smtp.ServerInfo
net/smtp.W
net/smtp.Xnet/smtp.cmd~net/smtp.hello~net/textproto.Error (*net/smtp.Client).Mail�DQ.ptr.prototype.Mail=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  %kb=this;  %�c=b.hello();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  %�return d;    case 3:  %�e="MAIL FROM:<%s>";    if(!(b.ext===false)){  %�f=(g=b.ext[$String.keyFor("8BITMIME")],g!==undefined?[g.v,true]:["",false]);h=f[1];    if(h){  &e=e+(" BODY=8BITMIME");    }    }  &>j=b.cmd(250,e,new X([new $String(a)]));$s=4;case 4:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[2];  &ereturn k;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Mail};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Mail=function(a){return this.$val.Mail(a);};Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~net/smtp.hello~ (*net/smtp.Client).Rcpt�jQ.ptr.prototype.Rcpt=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  '8b=this;  '\d=b.cmd(25,"RCPT TO:<%s>",new X([new $String(a)]));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[2];  '�return e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Rcpt};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Rcpt=function(a){return this.$val.Rcpt(a);};Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~ (*net/smtp.dataCloser).Close��T.ptr.prototype.Close=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  '�a=this;  '�b=a.WriteCloser.Close();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b;  (
d=a.c.Text.Reader.ReadResponse(250);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[2];  (3return e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:T.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.Close=function(){return this.$val.Close();};
dataClosernet/smtp.dataCloser (*net/smtp.Client).Data�Q.ptr.prototype.Data=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  )<a=this;  )ic=a.cmd(354,"DATA",new X([]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[2];    if(!($interfaceIsEqual(d,$ifaceNil))){  )�return[$ifaceNil,d];    }  )�e=a.Text.Writer.DotWriter();$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}return[new T.ptr(a,e),$ifaceNil];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Data};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Data=function(){return this.$val.Data();};Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~net/smtp.dataCloser net/smtp.SendMailV��V=function(a,b,c,d,e){var $ptr,a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  +Ng=R(a);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  +vreturn i;    }  +�$deferred.push([$methodVal(h,"Close"),[]]);  +�j=h.hello();$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;if(!($interfaceIsEqual(i,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  +�return i;    case 4:  +�l=h.Extension("STARTTLS");$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;m=k[0];if(m){$s=6;continue;}$s=7;continue;    case 6:  +�n=new E.Config.ptr($ifaceNil,$throwNilPointerError,AB.nil,false,$throwNilPointerError,AC.nil,AA.nil,h.serverName,0,AC.nil,false,AD.nil,false,false,AE.zero(),$ifaceNil,0,0,AF.nil,new $packages["sync"].Once.ptr());  ,&if(!(U===$throwNilPointerError)){$s=8;continue;}$s=9;continue;    case 8:  ,F$r=U(n);$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 9:  ,ho=h.StartTLS(n);$s=11;case 11:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}i=o;if(!($interfaceIsEqual(i,$ifaceNil))){$s=12;continue;}$s=13;continue;    case 12:  ,�return i;    case 13:    case 7:  ,�if(!($interfaceIsEqual(b,$ifaceNil))&&!(h.ext===false)){$s=14;continue;}$s=15;continue;    case 14:  ,�p=(q=h.ext[$String.keyFor("AUTH")],q!==undefined?[q.v,true]:["",false]);r=p[1];if(r){$s=16;continue;}$s=17;continue;    case 16:  ,�s=h.Auth(b);$s=18;case 18:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}i=s;if(!($interfaceIsEqual(i,$ifaceNil))){$s=19;continue;}$s=20;continue;    case 19:  -return i;    case 20:    case 17:    case 15:  -(t=h.Mail(c);$s=21;case 21:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}i=t;if(!($interfaceIsEqual(i,$ifaceNil))){$s=22;continue;}$s=23;continue;    case 22:  -Kreturn i;    case 23:  -Zu=d;v=0;case 24:if(!(v<u.$length)){$s=25;continue;}w=((v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]);  -yx=h.Rcpt(w);$s=26;case 26:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}i=x;if(!($interfaceIsEqual(i,$ifaceNil))){$s=27;continue;}$s=28;continue;    case 27:  -�return i;    case 28:    v++;$s=24;continue;case 25:  -�z=h.Data();$s=29;case 29:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}y=z;aa=y[0];i=y[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  -�return i;    }  -�ac=aa.Write(e);$s=30;case 30:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}ab=ac;i=ab[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  .return i;    }  .ad=aa.Close();$s=31;case 31:if($c){$c=false;ad=ad.$blk();}if(ad&&ad.$blk!==undefined){break s;}i=ad;    if(!($interfaceIsEqual(i,$ifaceNil))){  .@return i;    }  .Oae=h.Quit();$s=32;case 32:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}return ae;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:V};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};$pkg.SendMail=V;SendMailcrypto/tls.Certificatecrypto/tls.Configcrypto/tls.CurveIDcrypto/x509.CertPoolnet/smtp.AAnet/smtp.ABnet/smtp.ACnet/smtp.ADnet/smtp.AEnet/smtp.AFnet/smtp.Dialnet/smtp.SendMailnet/smtp.hello~net/smtp.testHookStartTLS	sync.Once (*net/smtp.Client).Extension��Q.ptr.prototype.Extension=function(a){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  /ab=this;  /�c=b.hello();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  /�return[false,""];    case 3:    if(b.ext===false){  /�return[false,""];    }  /�e=J.ToUpper(a);$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}a=e;  0f=(g=b.ext[$String.keyFor(a)],g!==undefined?[g.v,true]:["",false]);h=f[0];i=f[1];  0+return[i,h];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Extension};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Extension=function(a){return this.$val.Extension(a);};Clientnet/smtp.Clientnet/smtp.hello~strings.ToUpper (*net/smtp.Client).Reset�/Q.ptr.prototype.Reset=function(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  0�a=this;  0�b=a.hello();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  0�return c;    case 3:  0�e=a.cmd(250,"RSET",new X([]));$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[2];  1return f;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Reset};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Reset=function(){return this.$val.Reset();};Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~net/smtp.hello~ (*net/smtp.Client).Quit��Q.ptr.prototype.Quit=function(){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  1ja=this;  1�b=a.hello();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  1�return c;    case 3:  1�e=a.cmd(221,"QUIT",new X([]));$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[2];    if(!($interfaceIsEqual(f,$ifaceNil))){  1�return f;    }  1�g=a.Text.Close();$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}return g;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Quit};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Quit=function(){return this.$val.Quit();};Clientnet/smtp.Client
net/smtp.Xnet/smtp.cmd~net/smtp.hello~ �	�{"Base":12819,"Files":[{"Name":"/usr/local/go/src/net/smtp/auth.go","Base":1,"Size":3392,"Lines":[0,55,109,159,160,173,174,183,198,212,222,229,231,232,292,314,364,419,482,544,591,649,707,777,778,842,905,967,1007,1067,1125,1190,1192,1193,1249,1274,1309,1370,1425,1427,1428,1452,1489,1526,1528,1529,1599,1636,1710,1786,1820,1885,1940,1942,1943,2015,2033,2055,2097,2126,2148,2158,2163,2167,2186,2242,2246,2249,2277,2325,2328,2400,2427,2429,2430,2503,2514,2550,2606,2609,2626,2628,2629,2655,2680,2682,2683,2758,2795,2867,2924,2973,3012,3014,3015,3089,3118,3120,3121,3196,3207,3250,3272,3305,3370,3373,3390],"Infos":null},{"Name":"/usr/local/go/src/net/smtp/smtp.go","Base":3394,"Size":9424,"Lines":[0,55,109,159,160,245,293,315,337,359,411,424,425,434,448,467,477,483,490,507,518,520,521,583,604,683,714,736,809,830,845,881,898,917,949,972,1002,1023,1074,1125,1172,1174,1175,1241,1281,1323,1359,1376,1394,1397,1436,1466,1468,1469,1546,1593,1655,1688,1725,1742,1757,1775,1778,1858,1873,1875,1876,1908,1941,1964,1966,1967,2009,2042,2060,2080,2098,2116,2143,2147,2150,2171,2173,2174,2242,2311,2388,2462,2491,2540,2557,2619,2622,2647,2665,2667,2668,2747,2843,2883,2900,2920,2923,2949,2979,3030,3053,3055,3056,3135,3168,3200,3213,3262,3274,3276,3277,3344,3409,3441,3492,3509,3522,3525,3557,3594,3617,3641,3674,3714,3736,3763,3775,3797,3802,3806,3809,3844,3881,3884,3897,3909,3911,3912,3991,4068,4122,4157,4170,4173,4210,4227,4240,4243,4280,4316,4330,4347,4349,4350,4415,4480,4546,4597,4642,4677,4690,4693,4735,4747,4749,4750,4826,4876,4949,4987,5022,5035,5038,5070,5140,5157,5168,5181,5184,5240,5271,5329,5347,5364,5380,5392,5435,5447,5512,5535,5546,5596,5600,5618,5658,5662,5680,5701,5720,5732,5741,5745,5764,5773,5777,5833,5865,5911,5914,5926,5928,5929,6007,6085,6099,6179,6222,6257,6270,6273,6301,6320,6358,6388,6392,6395,6434,6446,6448,6449,6527,6603,6640,6681,6725,6737,6739,6740,6765,6776,6792,6794,6795,6832,6855,6896,6908,6910,6911,6981,7050,7091,7156,7206,7239,7256,7274,7277,7325,7327,7328,7392,7393,7456,7526,7594,7610,7691,7713,7730,7743,7746,7763,7797,7810,7813,7856,7906,7937,7965,7969,8013,8027,8031,8034,8065,8099,8135,8150,8155,8159,8162,8199,8212,8215,8242,8280,8294,8298,8301,8321,8338,8351,8354,8377,8394,8407,8410,8427,8444,8457,8460,8477,8479,8480,8548,8622,8690,8729,8785,8820,8839,8842,8861,8880,8883,8911,8936,8954,8956,8957,9030,9046,9079,9114,9127,9130,9163,9175,9177,9178,9250,9282,9317,9330,9333,9366,9383,9396,9399,9422],"Infos":null}]}
 