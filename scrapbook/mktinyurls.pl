
#!/usr/bin/perl

use strict;
use warnings;
my $filename = 'url_list';
open( my $fh, '<', $filename )
  or die "Could not open file '$filename' $!";
while ( my $row = <$fh> ) {
    chomp $row;
    print "$row\n";
    my $shorturlID = substr $row, -5;
    print $shorturlID;
  }
  exit;

    my $curl         = "curl -s ";
    my $tiny         = "https://is.gd/create.php?format=simple&url=";
    my $longurl      = "http://wikipedia.org";
    my $shorturlstem = "zzxxyywwvvuuttss";
    my $shorturlID   = "9998";
    my $shorturl     = $shorturlstem . $shorturlID;

    my $cmd = $curl . '"' . $tiny . $longurl . "&shorturl=" . $shorturl . '"';
    print $cmd, "\n";
    my $result = `$cmd 2>/dev/null`;
    print $shorturlID, "\t", $result, "\n";

    #possible  results:  contains "exists" ;
