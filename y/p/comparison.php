This is a (completely unfair) comparison between <a href='http://rada.re'>radare2</a>, <a href='https://www.hex-rays.com/products/ida/index.shtml'>IDA Pro</a> and <a href='http://hopperapp.com/'>Hopper</a>.

<table class='comparison'>
<thead>
<tr> <td width='50%'>Analysis</td>                  <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Graph View</td>                <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Signature recognition</td>     <td class='y'>yes</td> <td class='y'><a href='https://www.hex-rays.com/products/ida/tech/flirt/in_depth.shtml'>yes</a></td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Type support</td>              <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'><a href='http://dwarfstd.org/'>DWARF</a> support</td> <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'><a href='http://lldb.llvm.org/symbols.html'>dSym</a> support</td> <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Call/syscall recognition</td>  <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Cross-references</td>          <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>ROP-gadget finder</td>         <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Architecture</td>              <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>ARM</td>                       <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Java/<a href='https://source.android.com/devices/tech/dalvik/index.html'>Dalvik</a></td> <td class='y'>yes</td> <td class='y'>yes</td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>x86 and x64</td>               <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>CSR</td>                       <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'><a href='http://www.ti.com/lit/ug/spru393/spru393.pdf'>TMS320C55x+</a></td>               <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Bindings</td>                  <td>radare2</td>        <td>IDA</td>          <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Javascript</td>                <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Python</td>                    <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes </td> </tr>
<tr> <td width='50%'>Vala</td>                      <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Debugger</td>                  <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Remote debugging</td>          <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Breakpoints</td>               <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Tracing</td>                   <td class='y'>yes</td> <td class='y'>yes</td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Process attaching</td>         <td class='y'>yes</td> <td class='y'>yes</td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Decompilation</td>             <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>x86</td>                       <td class='n'>no </td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>x64</td>                       <td class='n'>no </td> <td class='n'>no </td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>ARM</td>                       <td class='n'>no </td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Patching</td>                  <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Writing/patching opcodes</td>  <td class='y'>yes</td> <td class='n'>no </td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Shellcode compilation</td>     <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Patches generation</td>        <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Platforms</td>                  <td>radare2</td>      <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Android</td>                   <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>BSD</td>                       <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>iPhone</td>                    <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Linux</td>                     <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>OSX</td>                       <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Windows</td>                   <td class='y'>yes</td> <td class='y'>yes</td> <td class='w'>only Hopper v2</td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Extensibility</td>              <td>radare2</td>      <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Exposed IL</td>                <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Open database format</td>      <td class='w'><a href='http://github.com/radare/sdb'>yes</a></td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Plugins support</td>           <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Prices and support</td>        <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Free (as in freedom)</td>      <td class='y'>yes</td> <td class='n'>no </td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Free (as in beer)</td>         <td class='y'>yes</td> <td class='n'>between 450&euro; and 2700&euro;</td> <td class='w'>between 65&euro; and 125&euro;</td> </tr>
<tr> <td width='50%'>Professional customers support</td>    <td class='n'>no </td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Open bugtracker</td>           <td class='y'><a href='https://github.com/radare/radare2/issues'>yes</a></td> <td class='n'>no </td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>Project management</td>        <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>Saving and exporting</td>      <td class='y'>yes</td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>Collaborative work</td>        <td class='w'>wip</td> <td class='w'>Via plugins </td> <td class='n'>no </td> </tr>
</tbody> </table>

<table class='comparison'>
<thead>
<tr> <td width='50%'>User interface</td>            <td>radare2</td>       <td>IDA</td>           <td>Hopper</td> </tr>
</thead> <tbody>
<tr> <td width='50%'>GUI</td>                       <td class='n'>no </td> <td class='y'>yes</td> <td class='y'>yes</td> </tr>
<tr> <td width='50%'>CLI</td>                       <td class='y'>yes</td> <td class='y'>yes</td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Themes support</td>            <td class='y'><a href='https://github.com/radare/radare2/wiki/Colorschemes'>yes</a></td> <td class='y'>yes</td> <td class='n'>no </td> </tr>
<tr> <td width='50%'>Web interface</td>             <td class='w'><a href='http://cloud.rada.re'>wip</a></td> <td class='n'>no </td> <td class='n'>no </td> </tr>
</tbody> </table>
